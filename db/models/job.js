'use strict';
module.exports = (sequelize, DataTypes) => {
  var Job = sequelize.define('Job', {
    companyName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: 'Interested'
    },
    location: {
      allowNull: true,
      type: DataTypes.STRING
    },
    url: {
      allowNull: true,
      type: DataTypes.STRING
    }
  });

  return Job;
};
