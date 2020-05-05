'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Jobs', 'creatorId', {
      type: Sequelize.UUID,
      references: {
        model: 'EmployerProfiles',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Jobs', 'creatorId');
  },
};
