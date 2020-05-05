'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Certificates', 'SellerProfileId', {
      type: Sequelize.UUID,
      references: {
        model: 'SellerProfiles',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Certificates', 'SellerProfileId');
  },
};
