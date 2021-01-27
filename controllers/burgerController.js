// ===Importing Express dependency and Express router object===
const express = require("express");
const router = express.Router();

// ===Import burger model for database functions===
const burger = require("../models/burger.js");

// ===Create routes===
// ---Route: Get all Burgers---
router.get("/", function(req, res) {
    burger.all(function(data) {
        data.map(obj => obj.topping = obj.id % 4)
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// ---Route: Add new Burger---
router.post("/api/burgers", function(req, res) {
    burger.create([
        "name", "consumed"
    ], [
        req.body.name, req.body.consumed
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

// ---Route: Update Burger when consumed---
router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;

    console.log("condition: ", condition);

    burger.update({
        consumed: true
    }, condition, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// ===Export routes===
module.exports = router;