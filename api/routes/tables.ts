import express from 'express';
import { readFileContentsJson } from '../utils/data-file';
import { TableFile } from '../types/table';

const router = express.Router({ mergeParams: true });

/**
 * GET tables listing.
 */
router.get('/', function (req, res, next) {
  const fileId = (req.params as { fileId: string }).fileId;
  try {
    const tableNames = readFileContentsJson<TableFile>(fileId)?.tables?.map(
      (table) => table.title
    );
    res.send(tableNames);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});

/**
 * GET table info.
 */
router.get('/:tableId', function (req, res, next) {
  const fileId = (req.params as unknown as { fileId: string }).fileId;
  const tableId = req.params.tableId;

  try {
    const table = readFileContentsJson<TableFile>(fileId)?.tables?.find(
      (table) => table.title === tableId
    );
    if (!table) {
      throw new Error('Table not found');
    }
    res.send(table);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});

export default router;
