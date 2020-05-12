'use strict';
module.exports = (sequelize, DataTypes) => {
  const EmployeeProfile = sequelize.define(
    'EmployeeProfile',
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
      profession: {
        type: DataTypes.STRING,
      },
      experience: {
        type: DataTypes.INTEGER,
      },
      phone: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
        },
      },
      title: {
        type: DataTypes.STRING,
      },
      bio: {
        type: DataTypes.TEXT,
      },
    },
    {}
  );
  EmployeeProfile.associate = function (models) {
    // associations can be defined here
    EmployeeProfile.belongsTo(models.User);
    EmployeeProfile.hasMany(models.Certificate);
  };
  return EmployeeProfile;
};
