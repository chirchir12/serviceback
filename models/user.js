'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          min: {
            args: 6,
            msg: 'password must be more than 6 characters',
          },
        },
      },
      isSeller: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isBuyer: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
    User.hasOne(models.EmployeeProfile);
    user.hasOne(models.EmployerProfile);
    User.hasOne(models.Loation);
  };
  return User;
};
