// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route 
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

 

    app.get("/data", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        var hbsObj = {
          data: dbPost
        };
        res.render("data", hbsObj);
      });
  });

};
