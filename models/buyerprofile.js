'use strict';
module.exports = (sequelize, DataTypes) => {
  const EmployerProfile = sequelize.define(
    'EmployerProfile',
    {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID4,
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      phone: {
        type: Sequelize.INTEGER,
        validate: {
          isNumeric: true,
        },
      },
    },
    {}
  );
  BuyerProfile.associate = function (models) {
    // associations can be defined here
    EmployerProfile.hasMany(models.Jobs);
  };
  return EmployerProfile;
};
