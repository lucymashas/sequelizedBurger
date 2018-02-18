var express = require("express");

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var db = require("../models/");

// Routes
router.get("/", function(req, res) {
  db.burger.findAll({}).then(function(Burger) {
    res.json(Burger);
  });
});


router.post("/burgers", function(req, res) {
  db.burger.insert({
    burger_name: req.body.burger,
    devoured: true
  }).then(function(Burger){
        res.json(Burger);
        res.redirect("/");
       
  }); 
});

router.put('/burgers/:id', function(req, res) {
  // var condition = 'id = ' + req.params.id;
  db.burger.update({
    devoured: false
  },{
    where:{
      id: req.body.id
    }
  }).then(function(Burger) {
     res.json(Burger);
      res.redirect('/');
  });
});




// Export routes for server.js to use.
module.exports = router;
