const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      // this is the equivalent of SQL's `NOT NULL` option. a vlue is required.
      allowNull: false,
      // instruct that this is the Primary Key
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true 
    },
      category_name: {
        type: DataTypes.STRING,
        allowNull: false 
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
