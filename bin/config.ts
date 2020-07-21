import { resolve } from 'path';

class CLIParser {
  readonly args: Map<string, string> = new Map();

  parse() {
    process.argv
      .slice(2)
      .forEach(arg => {
        const parts = arg.split('=');

        const key = parts[0];
        const value = parts[1] || 'true';

        this.args.set(key, value);
      });
  }

  get isProd(): boolean {
    return this.args.has('--prod');
  }

  display() {
    console.log('%o', this.args);
  }
}

const cli = new CLIParser();
cli.parse();

console.log(`Mode: ${cli.isProd ? 'production' : 'development'}`);

const serverProjectName = 'ftacademy';
const clientProjectName = 'b2b';

// The URL prefix used for link and script tag.
const staticPrefix = `/static/${clientProjectName}/`;

// Copy js and css to build directory of the server project for development,
// or to dedicated static server directory.
const jsCssCopyTarget = cli.isProd
  ? `../ftac/frontend/${clientProjectName}`
  : `../${serverProjectName}/build/public/static/${clientProjectName}`;

const config = {
  production: cli.isProd,
  staticPrefix,
  goTemplate: 'views.go.njk', // The nunjucks template used to generated go template file
  goOutFile: resolve(process.cwd(), 'dist/templates.go'), // The generated go file containing inlined templates.
  htmlCopyTarget: `../${serverProjectName}/web/views`, // The directory used to place generated go tempalate file.
  jsCssCopyTarget, // The directory used to put js and css file.
};

export default config;
