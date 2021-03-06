// *********************************************************************************
// tags-api-routes.js - Routes for displaying and saving data to the tags table
// *********************************************************************************

// Dependencies
// =============================================================
const db = require("../models");
const passport = require("../config/passport");
const authenticate = require("../config/authenticate");
  
// Routes
// =============================================================
module.exports = function(app) {
  // Find all tags
  app.get("/api/tags", function(req, res) {
    db.Tags.findAll({})
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.status(500).send(err);
      });
  });

  // Create new tag
  app.post("/api/tags/create", function(req, res) {
    db.Tags.create(req.body)
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.status(500).send(err);
      });
  });

  // Delete tag (server-side only)
  app.post("/api/tags/delete", function (req, res) {
    db.Tags.destroy({
      where: {
        id: +req.body.tagId
      }
    })
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
  });

};


