import express from 'express';
import { readFiles } from '../utils/data-file';

const router = express.Router({ mergeParams: true });

/* GET files listing. */
router.get('/', function (req, res, next) {
  res.send(readFiles());
});

export default router;
