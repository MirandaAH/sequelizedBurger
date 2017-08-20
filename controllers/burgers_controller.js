var db = require('../models/index.js');

module.exports = function (app) {

  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  app.post("/", function(req, res) {
    db.Burger.create(
      {
        burger_name: req.body.burger_name
      }).then(function(data) {
        res.redirect("/");
      });
    });

  app.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    db.Burger.update(
      {
        devoured: true
      },
      {
        where: {
          id: req.params.id
      }
  }).then(function() {
      res.redirect("/");
  });
});
};
