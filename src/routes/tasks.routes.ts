import { Router } from 'express';
import taskController from '../controller/task.controller';

export const taskRoutes = Router();

taskRoutes.get('/', taskController.getAllTask);
taskRoutes.get('/:id', taskController.getTaskById);
taskRoutes.post('/', taskController.createTask);
taskRoutes.patch('/:id', taskController.updateTask);
taskRoutes.delete('/:id', taskController.deleteTask);
