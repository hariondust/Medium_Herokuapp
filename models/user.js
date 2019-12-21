'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    fullname: DataTypes.STRING,
    image: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.comment, {
      as: "commentId",
      foreignKey: "id",
    })
  };
  return user;
};
