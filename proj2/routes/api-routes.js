// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/data/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    db.Post.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Post.create({
      companyName: req.body.companyName,
      sharesOut: req.body.sharesOut,
      year: req.body.year,
      sales: req.body.sales,
      cogs: req.body.cogs,
      rdExp: req.body.rdExp,
      sga: req.body.sga,
      depAmo: req.body.depAmo,
      intExp: req.body.intExp,
      nonOpInc: req.body.nonOpInc,
      incTax: req.body.incTax,
      otherInc: req.body.otherInc,
      proIncTaxes: req.body.proIncTaxes,
      opCashSec: req.body.opCashSec,
      receiv: req.body.receiv,
      inven: req.body.inven,
      otherCA: req.body.otherCA,
      ppe: req.body.ppe,
      goodwill: req.body.goodwill,
      otherA: req.body.otherA,
      currDebt: req.body.currDebt,
      payable: req.body.payable,
      incTaxPay: req.body.incTaxPay,
      otherCurrLiab: req.body.otherCurrLiab,
      ltd: req.body.ltd,
      otherLiab: req.body.otherLiab,
      defTaxes: req.body.defTaxes,
      minInterest: req.body.minInterest,
      preStock: req.body.defTaxes,
      picc: req.body.picc,
      retEarn: req.body.retEarn,
     


    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
};
