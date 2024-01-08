import express from 'express';
import { readFiles } from '../utils/data-file';

const router = express.Router({ mergeParams: true });

/* GET files listing. */
router.get('/', function (req, res, next) {
  try {
    const fileNames = readFiles()?.map((file) => file.name);
    res.send(fileNames);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }

  res.send(readFiles());
});

export default router;
