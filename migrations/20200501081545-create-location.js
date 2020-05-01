'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID4,
      },
      country: {
        type: Sequelize.STRING,
      },
      county: {
        type: Sequelize.STRING,
      },
      subCounty: {
        type: Sequelize.STRING,
      },
      constituency: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      subLocation: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Locations');
  },
};
