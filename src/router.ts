import { Router } from 'express';
import { taskRoutes } from './routes/tasks.routes';
import createHttpError from 'http-errors';

const router = Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  return res.render('index', { title: 'Express' });
});

router.use('/v1/tasks', taskRoutes);


export default router;
