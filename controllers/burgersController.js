// var express = require("express");

// var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var db = require("../models/");

module.exports = function(app) {
// Routes
app.get("/", function(req, res) {
  db.burger.findAll({
  }).then(function(dbBurger) {
    res.render("index", { burger_data: dbBurger});
  });
});


app.post("/burgers", function(req, res) {
  db.burger.create({
    burger_name: req.body.burger,
    devoured: true
  }).then(function(dbBurger){
        // res.json(dbBurger);
        res.redirect("/");
       
  }); 
});

app.put('/burgers/:id', function(req, res) {
  // var condition = 'id = ' + req.params.id;
  db.burger.update({
    devoured: false
  },{
    where:{
      id: req.params.id
    }
  }).then(function(dbBurger) {
    //  res.json(dbBurger);
    
      res.redirect('/');
  })
  .catch(function(err){
    res.json(err);
  });
});
};





// Export routes for server.js to use.
// module.exports = router;