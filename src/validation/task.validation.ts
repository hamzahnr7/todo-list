import { body, param } from "express-validator";

export interface CreateTaskDto {
  title: string;
  description: string;
  status: string;
  dueDate: Date;
}

export interface UpdateTaskDto {
  title?: string;
  description?: string;
  status?: string;
  dueDate?: Date;
}

export class TaskValidation {
  createTask = [
    body('title').isString().isLength({ max: 255 }),
    body('description').isString().isLength({ max: 255 }),
    body('status').isString().isLength({ max: 255 }),
    body('dueDate').isDate(),
  ];

  getTaskById = [param('id')];

  updateTask = [
    body('title').isString().isLength({ max: 255 }).optional(),
    body('description').isString().isLength({ max: 255 }).optional(),
    body('status').isString().isLength({ max: 255 }).optional(),
    body('dueDate').isDate().optional(),
  ];
}

export default new TaskValidation();
