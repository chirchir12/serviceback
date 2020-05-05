'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Jobs', 'jobCategoryId', {
      type: Sequelize.UUID,
      references: {
        model: 'JobCategories',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Jobs', 'jobCategoryId');
  },
};
