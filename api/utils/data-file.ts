import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const dataFilesPath = resolve(serverDistFolder, '../../../api/data-files');

export const readFiles = () => {
  return fs
    .readdirSync(dataFilesPath, {
      withFileTypes: true,
    })
    .filter((dir) => !dir.isDirectory());
};

export const readFileContents = (path: string) => {
  return fs.readFileSync(resolve(dataFilesPath, path.replaceAll('..', '_')));
};

export const readFileContentsJson = <T>(path: string): T =>
  JSON.parse(readFileContents(path).toString());
