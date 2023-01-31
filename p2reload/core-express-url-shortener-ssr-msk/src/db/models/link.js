const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Link.init({
    url: DataTypes.TEXT,
    code: DataTypes.STRING,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    sequelize,
    modelName: 'Link',
  });
  return Link;
};
