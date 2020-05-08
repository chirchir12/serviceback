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
        defaultValue: DataTypes.UUIDV4,
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
        },
      },
    },
    {}
  );
  EmployerProfile.associate = function (models) {
    // associations can be defined here
    EmployerProfile.hasMany(models.Job);
    EmployerProfile.belongsTo(models.User);
  };
  return EmployerProfile;
};
