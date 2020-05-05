'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    'Location',
    {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID4,
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
  Location.associate = function (models) {
    // associations can be defined here
  };
  return Location;
};
