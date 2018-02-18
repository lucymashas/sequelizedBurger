var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// helper function for ? values in mysql syntax
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];
  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Bacon Cheeseburger => 'Bacon Cheeseburger')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {burger_name: 'Bacon Cheeseburger'} => ["burger_name='Bacon Cheeseburger'"]
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

var orm = {
  all: function (table_name,cb){
    var queryString = "SELECT * FROM " + table_name + ";";
    connection.query(queryString,function(err,result){
      if (err){
        console.log("Error Message:  " + err);
      }
      cb(result);
    });
  },
  insert: function(table_name,cols,values,cb){
    var queryString="INSERT INTO " + table_name;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";
        console.log(queryString);
        connection.query(queryString,values,function(err,result){
          if (err){
            throw err
          }
          cb(result);
    });
  },

  update: function(table_name,cols,condition,cb){
        var queryString = "UPDATE " + table_name;
        queryString += " SET ";
        queryString += objToSql(cols);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
        cb(result);
    });
  }
};









module.exports = orm;