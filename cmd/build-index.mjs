import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import nunjucks from 'nunjucks';
import inline from 'inline-source';
const { inlineSource } = inline;
import { promises as fs } from 'fs';
import { createRequire } from 'module';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const require = createRequire(import.meta.url);
const pkg = require('../package.json');

nunjucks.configure({
  autoescape: false,
});

/**
 * @typedef {Object} ScriptAttr
 * @property {string} src
 * @property {boolean} isModule
 *
 * @typedef {Object} Assets
 * @property {string[]} styles
 * @property {ScriptAttr[]} scripts
 */

/**
 * @param {string} fileName
 * @return {Promise<Assets>}
 */
async function parse(fileName) {
  const ret = {
    styles: [],
    scripts: []
  };

  const dom = await JSDOM.fromFile(fileName);

  const document = dom.window.document;

  const links = document.querySelectorAll('link');

  links.forEach(elem => {
    const link = elem.getAttribute('href');

    if (link.startsWith('https') || link.startsWith('favicon')) {
      return;
    }

    ret.styles.push(link);
  });

  const scripts = document.querySelectorAll('script');

  scripts.forEach(script => {
    ret.scripts.push({
      src: script.getAttribute('src'),
      isModule: script.getAttribute('type') === 'module'
    })
  });

  return ret;
}

/**
 * @typedef {Object} Context
 * @property {string} iconUrl
 * @property {string} bsVersion
 * @property {string[]} styles
 * @property {ScriptAttr[]} scripts
 */

/**
 * @param {Object} param
 * @param {string} param.name
 * @param {Context} param.ctx
 * @return {Promise<string>}
 */
async function render({name, ctx}={}) {
  const filePath = resolve(__dirname, name);
  const template = await fs.readFile(filePath, { encoding: 'utf8'});

  return nunjucks.renderString(template, ctx);
}

async function build() {
  const inFile = resolve(__dirname, '../dist/b2b-client/index.html');

  console.log(`Parsing file ${inFile}`)
  const assets = await parse(inFile);

  console.log(assets);

  const renderd = await render({
    name: 'index.html',
    ctx: {
      iconUrl: "http://interactive.ftchinese.com/favicons",
      bsVersion: pkg.devDependencies.bootstrap.replace("^", ""),
      ...assets,
    }
  });

  console.log('inlining css...')
  const inlineResult = await inlineSource(renderd)

  const goTemplate = await render({
    name: 'index.go',
    ctx: {
      content: inlineResult
    }
  });

  const outFile = resolve(__dirname, '../dist/index.html.go');
  console.log(`Writing file ${outFile}`);

  await fs.writeFile(
    outFile,
    goTemplate,
  );
}

build().catch(err => console.log(err));
