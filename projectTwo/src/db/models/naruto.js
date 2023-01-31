const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Naruto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Naruto.init({
    name: DataTypes.STRING,
    img: DataTypes.TEXT,
    info: DataTypes.TEXT,
    createdAt: Date(),
    updatedAt: Date(),
  }, {
    sequelize,
    modelName: 'Naruto',
  });
  return Naruto;
};
