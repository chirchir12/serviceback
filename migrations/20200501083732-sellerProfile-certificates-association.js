'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Certificates', 'EmployeeProfileId', {
      type: Sequelize.UUID,
      references: {
        model: 'EmployeeProfiles',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Certificates', 'EmployeeProfileId');
  },
};
