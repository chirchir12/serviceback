'use strict';
module.exports = (sequelize, DataTypes) => {
  const JobCategory = sequelize.define(
    'JobCategory',
    {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      slug: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {}
  );
  JobCategory.associate = function (models) {
    // associations can be defined here
    JobCategory.hasMany(models.Job);
  };
  return JobCategory;
};
