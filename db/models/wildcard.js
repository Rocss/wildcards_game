'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wildcard = sequelize.define('Wildcard', {
    type: DataTypes.STRING,
    used: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
  }, {});
  Wildcard.associate = function(models) {
    Wildcard.belongsTo(models.User, { foreignKey: 'wonBy' });
  };
  return Wildcard;
};