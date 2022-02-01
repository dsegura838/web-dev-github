//import express
const express = require("express");

//import default routes
const defaultRoutes = require("./routes/default");

//import restaurant routes
const restaurantRoutes = require("./routes/restaurants");

//to build a path to a file
const path = require("path");

//call express function and store result in const named app
const app = express();

//specify views path
app.set("views", path.join(__dirname, "views"));

//specifying template engine we want
app.set("view engine", "ejs");

//are the requests being made to a file found in our workspace
app.use(express.static("public"));
//parses incoming requests so as to recognize the incoming Request object as strings or arrays. Returns an object
app.use(express.urlencoded({ extended: false }));

//forward all incoming requests to our default routes
app.use("/", defaultRoutes);

//forward all incoming requests
app.use("/", restaurantRoutes);

//our middleware will kick in whenever a request is not handled by any of the other routes
app.use(function (req, res) {
  //return 404 page
  res.status(404).render("404");
});

//Express' general error handling middleware
app.use(function (error, req, res, next) {
  res.status(500).render("500");
});
//start listening to incoming requests on a certain port
app.listen(3000);
