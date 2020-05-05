'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define(
    'Job',
    {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID4,
      },
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      slug: DataTypes.STRING,
      deadline: DataTypes.DATE,
      budget: DataTypes.FLOAT,
    },
    {}
  );
  Job.associate = function (models) {
    // associations can be defined here
    Job.belongsToMany(models.EmployeeProfile, {
      through: 'Bids',
      foreignKey: 'jobId',
    });
  };
  return Job;
};
