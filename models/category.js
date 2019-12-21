'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {});
  category.associate = function(models) {
    category.hasMany(models.article, {
      as: "categoryId",
      foreignKey: "category_id",
    })
  };
  return category;
};
