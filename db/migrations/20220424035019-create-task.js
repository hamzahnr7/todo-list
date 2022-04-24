'use strict';

const sequelize = require('sequelize');

module.exports = {
  /**
   *
   * @param {sequelize.QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        defaultValue: '',
      },
      status: {
        type: Sequelize.STRING,
      },
      dueDate: {
        type: Sequelize.DATE,
        field: 'due_date',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  /**
   *
   * @param {sequelize.QueryInterface} queryInterface
   * @param {sequelize} Sequelize
   */
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  },
};
