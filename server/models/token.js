'use strict';

module.exports = function(sequelize, DataTypes) {
  var Token = sequelize.define('Token', {
    token: DataTypes.STRING,
    expires: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
