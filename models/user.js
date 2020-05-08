'use strict';
const bcrypt = require('bcrypt');

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
            args: 4,
            msg: 'password must be more than 6 characters',
          },
        },
      },
      isEmployee: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isEmployer: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {}
  );
  User.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, 10).then(hashedPw => {
      user.password = hashedPw;
    });
  });
  User.associate = function (models) {
    // associations can be defined here
    User.hasOne(models.EmployeeProfile);
    User.hasOne(models.EmployerProfile);
    User.hasOne(models.Location);
  };
  return User;
};
