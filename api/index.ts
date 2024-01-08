import express from 'express';
import files from './routes/files';
import tables from './routes/tables';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// The Express app is exported so that it can be used by serverless Functions.
export function api(): express.Router {
  const server = express();

  server.get('/', (req, res) => {
    res.send('Hello World!' + dirname(fileURLToPath(import.meta.url)));
  });

  server.use('/files', files);
  files.use('/:fileId/tables', tables);

  return server;
}
