'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Transaction, {foreignKey: 'game_id'})
    }
  }
  Game.init({
    title: DataTypes.STRING,
    release_date: DataTypes.DATE,
    price: DataTypes.INTEGER,
    rating: DataTypes.STRING,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};