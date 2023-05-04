/* eslint-disable no-undef */
import fse from 'fs-extra';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const baseDir = dirname(fileURLToPath(import.meta.url));
const buildDir = path.resolve(baseDir, '../dist/npm-starter-kit');

// source dir: src/npm-starter-kit
// build dir: dist/npm-starter-kit

/**
 * Generate dist/npm-starter-kit/package.json
 */
async function main() {
  const pkgJson = await fse.readJSON(
    path.resolve(baseDir, '../package.json')
  );

  // delete unnecessary keys
  delete pkgJson.scripts;
  delete pkgJson.devDependencies;
  delete pkgJson.private;

  // set dependencides
  // pkgJson.dependencies = {};

  // set peer dependencies
  // pkgJson.peerDependencies = {};

  fse.writeJSON(
    path.join(buildDir, 'package.json'),
    pkgJson,
    { spaces: 2 }
  );
}

main();
