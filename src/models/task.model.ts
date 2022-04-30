import { Sequelize, Model, DataTypes, CreationOptional } from "sequelize";
import { Models } from ".";

export class Task extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */

  declare id: CreationOptional<Number>;
  declare title: String;
  declare description: String;
  declare status: String;
  declare dueDate: Date;

  //Timestamp
  // createdAt can be undefined during creation
  declare createdAt?: CreationOptional<Date>;
  // updatedAt can be undefined during creation
  declare updatedAt?: CreationOptional<Date>;

  static associate(models: Models) {
    // define association here
  }
}

export const taskModel = (sequelize: Sequelize, DT: typeof DataTypes) => {
  Task.init(
    {
      title: {
        type: DT.STRING,
        allowNull: false,
      },
      description: {
        type: DT.TEXT,
        defaultValue: '',
      },
      status: {
        type: DT.STRING,
      },
      dueDate: {
        type: DT.DATE,
        field: 'due_date',
      },
    },
    {
      sequelize,
      modelName: 'Task',
      underscored: true,
    },
  );
  return Task;
};
