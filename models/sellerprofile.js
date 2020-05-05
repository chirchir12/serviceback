'use strict';
module.exports = (sequelize, DataTypes) => {
  const SellerProfile = sequelize.define(
    'SellerProfile',
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
  SellerProfile.associate = function (models) {
    // associations can be defined here
    SellerProfile.hasMany(models.Certificate);
    SellerProfile.belongsToMany(models.Job, {
      through: 'Bids',
      foreignKey: 'bidderId',
    });
  };
  return SellerProfile;
};
