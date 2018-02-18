module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("burgers", {
    burger_name: {
      DataTypes:STRING,
      validate: {
        args:(8),
        msg: "Please Your Burger Name has to be at least 8 characters long."
      }
    },
    devoured: {
      DataTypes:BOOLEAN,
      defaultValue: false
    }
  });
  return Burger;
};


