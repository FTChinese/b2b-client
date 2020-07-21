import * as shell from 'shelljs';

import config from './bin/config';

const currentProjectName = 'b2b-client';

shell.mkdir('-p', config.htmlCopyTarget);
shell.mkdir('-p', config.jsCssCopyTarget);

shell.cp(`dist/${currentProjectName}/*.js`, config.jsCssCopyTarget);

if (config.production) {
  shell.cp(`dist/${currentProjectName}/*.css`, config.jsCssCopyTarget);
} else {
  shell.cp(`dist/${currentProjectName}/*.map`, config.jsCssCopyTarget);
}

shell.cp(config.goOutFile, config.htmlCopyTarget);
