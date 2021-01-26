// ===Require Express and Handlebars Dependencies and Routes===
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgerController.js");

// ===Establish PORT variable for routes===
const PORT = process.env.PORT || 8080;

// ===Creating a new Express server===
const app = express();

// ===Make static public elements available to page===
app.use(express.static("public"));

// ===Middleware: Parsing functions===
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ===Middleware: Handlebars===
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ===Provide Routes to Express server===
app.use(routes);

// ===Start server to listen for requests===
app.listen(PORT, function() {
    console.log("Server listeninrg on PORT: " + PORT);
});

