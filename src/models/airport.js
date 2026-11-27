'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airport.init({
    name:{ 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    code: { 
      type: DataTypes.STRING, 
      allowNull: false,
      unique: true
    },
    address: { 
      type: DataTypes.STRING, 
      allowNull: true,
      unique: true
     },
    cityId: { 
      type: DataTypes.INTEGER, 
      allowNull: true 
    },
    country: { 
      type: DataTypes.STRING, 
      allowNull: true,
      defaultValue: 'India'
    }
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};