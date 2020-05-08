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
        defaultValue: DataTypes.UUIDV4,
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
    Job.belongsTo(models.JobCategory);
    Job.belongsTo(models.EmployerProfile);
    Job.belongsToMany(models.EmployeeProfile, {
      through: 'Bids',
      foreignKey: 'jobId',
    });
  };
  return Job;
};
