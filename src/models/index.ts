import { DataTypes, Sequelize } from 'sequelize';
import databaseConfig from '../config/database.config';
import { Task, taskModel } from './task.model';

const env = process.env.NODE_ENV! || 'development';
const config = databaseConfig[env as keyof typeof databaseConfig];

export interface Models {
  Task: typeof Task;
}
type ModelsKeys = keyof Models;

let sequelize: Sequelize = config.url
  ? new Sequelize(config.url as string, config)
  : new Sequelize(config.database!, config.username!, config.password, config);

const models: Models = {
  Task: taskModel(sequelize, DataTypes),
};

Object.keys(models).forEach((modelName) => {
  if (!!models[modelName as ModelsKeys].associate) {
    models[modelName as ModelsKeys].associate(models);
  }
});

export const db = {
  ...models,
  sequelize,
  Sequelize,
};
