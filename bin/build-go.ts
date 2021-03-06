import { resolve } from 'path';
import { promises } from 'fs';
import render from './lib/render';
import { Assets, parse } from './lib/parser';
import { HTMLTag } from './lib/html-tag';
import config from './config';

const { writeFile } = promises;

interface CtxIndex {
  iconUrl: string;
  styles: string; // HTML link tags
  scripts: string; // HTML script tags.
}

interface Template {
  name: string;
  content: string;
}

interface CtxGo {
  data: Template[];
}

// The index.html generated by ng build.
const inputFile = resolve(process.cwd(), 'dist/b2b-client/index.html');

async function build(assets: Assets): Promise<void> {

  // Build HTML links elememt
  const styles = assets.styles.map(attrs => {
    return (new HTMLTag('link'))
      .withPathPrefix(config.staticPrefix)
      .withSelfClosing()
      .withAttributes(attrs)
      .render();
  })
  .join('\n');

  // Build HTML script element
  const scripts = assets.scripts.map(attrs => {
    return (new HTMLTag('script'))
      .withPathPrefix(config.staticPrefix)
      .withAttributes(attrs)
      .render();
  })
  .join('\n');


  const ctxIndex: CtxIndex = {
    iconUrl: 'http://interactive.ftchinese.com/favicons',
    styles,
    scripts,
  };

  const homeHMTL = await render('index.html', ctxIndex);

  await writeFile(config.goOutFile, homeHMTL, { encoding: 'utf8' });
}

parse(inputFile)
  .then(assets => {
    build(assets);
  })
  .catch(err => console.log(err));

