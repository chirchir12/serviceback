'use strict';
module.exports = (sequelize, DataTypes) => {
  const Certificate = sequelize.define(
    'Certificate',
    {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      certifiedFor: DataTypes.STRING,
      description: DataTypes.TEXT,
      graduatedOn: DataTypes.DATE,
    },
    {}
  );
  Certificate.associate = function (models) {
    // associations can be defined here
    Certificate.belongsTo(models.EmployeeProfile);
  };
  return Certificate;
};
