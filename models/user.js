'use strict';

const { hashPassword } = require('../helpers/helpers')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Transaction,{foreignKey: "user_id"})
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {msg: "Email must be unique"},
      validate: {
        notNull: {msg: 'Email is required'},
        notEmpty: {msg: "Email is required"}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "Password is required"},
        notEmpty: {msg: "Password is required"}
      }
    },
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate( (user) => {
    user.password = hashPassword(user.password)
  })
  return User;
};