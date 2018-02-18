// Import the config (orm.js) 
var burgersOrm = require("../config/orm.js");

//create the code that will call the ORM functions using burger specific input for the ORM.


var burger = {
  all: function(cb) {
    burgersOrm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insert: function(cols, vals, cb) {
    burgersOrm.insert("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    burgersOrm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};


// Export the database functions for the controller.
module.exports = burger;
