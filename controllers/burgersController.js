var express = require("express");

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var db = require("../models/");


// Routes
router.get("/", function(req, res) {
  db.Burger.findAll({
  }).then(function(dbBurger) {
    res.json(dbBurger);
  });
});


router.post("/burgers", function(req, res) {
  db.Burger.insert({
    burger_name: req.body.burger,
    devoured: true
  }).then(function(dbBurger){
        res.json(dbBurger);
        res.redirect("/");
       
  }); 
});

router.put('/burgers/:id', function(req, res) {
  // var condition = 'id = ' + req.params.id;
  db.Burger.update({
    devoured: false
  },{
    where:{
      id: req.body.id
    }
  }).then(function(dbBurger) {
     res.json(dbBurger);
      res.redirect('/');
  });
});



// Export routes for server.js to use.
module.exports = router;
