import expressAsyncHandler from 'express-async-handler';
import taskService, { TaskService } from '../services/task.service';
import { CreateTaskDto, UpdateTaskDto } from '../validation/task.validation';

type TaskControllerId = { id: number };

export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  getAllTask = expressAsyncHandler(async (req, res) => {
    const tasks = await this.taskService.getTasks(req.query);
    res.json(tasks);
  });

  getTaskById = expressAsyncHandler<TaskControllerId>(async (req, res) => {
    const task = await this.taskService.getTaskById(req.params.id);
    res.json(task);
  });

  createTask = expressAsyncHandler<any, any, CreateTaskDto>(async (req, res) => {
    const task = await this.taskService.createTask(req.body);
    res.status(201).json(task);
  });

  updateTask = expressAsyncHandler<TaskControllerId, UpdateTaskDto>(async (req, res) => {
    const task = await this.taskService.updateTask(req.params.id, req.body);
    res.sendStatus(204);
  });

  deleteTask = expressAsyncHandler<TaskControllerId>(async (req, res) => {
    const deleteTask = await this.taskService.deleteTask(req.params.id);
    res.sendStatus(204);
  });
}

export default new TaskController(taskService);
