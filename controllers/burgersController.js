var express = require("express");

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burger = require("../models/burger.js");

// Routes
router.get("/", function(req, res) {
  burger.all(function(data) {
    res.render("index", { burger_data: data});
  });
});

router.post("/burgers", function(req, res) {
  burger.insert(["burger_name","devoured"],[req.body.burger,true],
     function(result){
        //res.json({id: result.insertId});
        res.redirect("/");
       
  }); 
});

router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
  burger.update({devoured: false}, condition, 
    function(data) {
      res.redirect('/');
  });
});






// Export routes for server.js to use.
module.exports = router;
