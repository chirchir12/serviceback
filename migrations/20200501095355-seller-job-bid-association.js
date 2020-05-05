'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('Bids', {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      bidderId: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: 'EmployeeProfiles',
          key: 'id',
        },
      },
      jobId: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: 'Jobs',
          key: 'id',
        },
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('Bids');
  },
};
