import { resolve } from 'path';

const isProd = process.env.NODE_ENV === 'production';

console.log('NODE_ENV: %s', process.env.NODE_ENV);

const serverProjectName = 'ftacademy';
const clientProjectName = 'b2b';

// The URL prefix used for link and script tag.
const staticPrefix = `/static/${clientProjectName}/`;

// Copy js and css to build directory of the server project for development,
// or to dedicated static server directory.
const jsCssCopyTarget = isProd
  ? `../ftac/frontend/${clientProjectName}`
  : `../${serverProjectName}/build/public/static/${clientProjectName}`;

const config = {
  production: isProd,
  staticPrefix,
  goTemplate: 'views.go.njk', // The nunjucks template used to generated go template file
  goOutFile: resolve(process.cwd(), 'dist/templates.go'), // The generated go file containing inlined templates.
  htmlCopyTarget: `../${serverProjectName}/web/views`, // The directory used to place generated go tempalate file.
  jsCssCopyTarget, // The directory used to put js and css file.
};

export default config;
