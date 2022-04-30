import createHttpError from 'http-errors';
import { db } from '../models';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { UpdateTaskDto } from '../dtos/update-task.dto';
import { TaskPaginationQuery } from '../dtos/task-pagination.query';
// import { CreateTaskDto, UpdateTaskDto } from '../validation/task.validation';


export class TaskService {
  constructor(private database: typeof db) {}

  async getTasks(taskPaginationQuery: TaskPaginationQuery){
    let [size, page] = [Number(taskPaginationQuery.size), Number(taskPaginationQuery.page)];
    if (size <= 5) size = 5;
    if (page <= 1) page = 1;
    const result = await this.database.Task.findAll({ offset: (page-1)*size, limit:size });
    return {result, page, size};
  }
  async getTaskById(taskId: number){
    const task = await db.Task.findOne({ where: { id: taskId } });
    if (!task) throw createHttpError(404, 'Task not found');
    return task;
  }
  async createTask(createTaskDto: CreateTaskDto){
    const task = await db.Task.create({ ...createTaskDto });
    return task;
  }
  async updateTask(id: number, updateTaskDto: UpdateTaskDto){
    const task = await db.Task.findOne({where: {id: id}});
    if (!task) throw createHttpError(404, 'Task not found');
    const updateTask = await db.Task.update({
      title: updateTaskDto.title || task.title,
      description: updateTaskDto.description || task.description,
      status: updateTaskDto.status || task.status,
      dueDate: updateTaskDto.dueDate || task.dueDate,
    },{where: {id : id}});
    return updateTask;
  }
  async deleteTask(id: number){
    const deleteTask = await db.Task.destroy({where: {id: id}});
    if (!deleteTask) throw createHttpError(404, 'Task not found');
    return deleteTask;
  }
}

export default new TaskService(db);
