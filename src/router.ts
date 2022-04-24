import { Router } from 'express';
import { db } from './models';

const router = Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test', async function (req, res, next) {
  const taskList = await db.Task.findAll();
  res.json({data : taskList});
});

export default router;
