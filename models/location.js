'use strict';
const { v4 } = require('uuid')
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    'Location',
    {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      country: DataTypes.STRING,
      county: DataTypes.STRING,
      subCounty: DataTypes.STRING,
      constituency: DataTypes.STRING,
      location: DataTypes.STRING,
      subLocation: DataTypes.STRING,
    },

    {}
  );
  Location.beforeCreate((location, options) => {
    return location.id = v4()
  });
  Location.associate = function (models) {
    // associations can be defined here
    Location.belongsTo(models.User);
  };
  return Location;
};
