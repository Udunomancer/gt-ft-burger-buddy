// ===Import ORM===
const orm = require("../config/orm.js");

var burger = {
  //Burger GET ALL model
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },

  //Burger CREATE NEW model
  create: function (cols, vals, cb) {
    orm.create("burgers", cols, vals, function (res) {
      cb(res);
    });
  },

  //Burger UPDATE EXISTING model
  update: function (objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
};

// ===Export burger database functions===
module.exports = burger;
