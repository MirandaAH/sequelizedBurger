module.exports = function (sequelize, DataTypes){
   var Burger = sequelize.define("Burger", {
  burger_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: 1
    }
  },
  devoured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  date: {
    type: DataTypes.DATE
  }
});
Burger.associate = function(models) {
  Customer.belongsTo(models.Burger, {
    foreignKey: {
      allowNull: false
    }
  });
}
 return Burger;
}
