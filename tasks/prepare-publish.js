/* eslint-disable no-undef */
import fse from 'fs-extra';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const baseDir = dirname(fileURLToPath(import.meta.url));
const buildDir = path.resolve(baseDir, '../dist/npm-start-kit');

// source dir: src/npm-start-kit
// build dir: dist/npm-start-kit

/**
 * Generate dist/npm-start-kit/package.json
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
