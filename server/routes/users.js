var express = require("express");
var router = express.Router();
var User = require("../models/User");

router.get("/:id?", (req, res) => {
  if (req.params.id) {
    User.getUserById(req.params.id, (err, rows) => {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    User.getAllUsers((err, rows) => {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

// router.get("/add", (req, res) => res.render("add"));

router.post("/", (req, res) => {
  for (var r in req.body) {
    if (!req.body[r]) delete req.body[r];
  }
  User.addUser(req.body, (err, results, fields) => {
    if (err) {
      res.status(500).json(err.sqlMessage);
    } else {
      res.json(req.body);
    }
  });
});

router.delete("/:id", (req, res) => {
  User.deleteUser(req.params.id, (err, count) => {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});

router.put("/:id", (req, res, next) => {
  User.updateUser(req.params.id, req.body, (err, rows) => {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
