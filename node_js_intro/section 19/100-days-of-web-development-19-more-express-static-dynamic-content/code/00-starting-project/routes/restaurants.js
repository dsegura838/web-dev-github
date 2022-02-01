//import express
const express = require("express");

//importing uuid package, will return an object
const uuid = require("uuid");

//import one of my own files
const resData = require("../util/restaurant-data");

//call router function
const router = express.Router();

const req = require("express/lib/request");

router.get("/restaurants", (req, res) => {
  let order = req.query.order;
  let nextOrder = "desc";

  if (order !== "asc" && order !== "desc") {
    order = "asc";
  }

  if (order === "desc") {
    nextOrder = "asc";
  }
  const storedRestaurants = resData.getStoredRestaurants();

  //sort the restaurants
  storedRestaurants.sort(function (resA, resB) {
    if (
      (order === "asc" && resA.name > resB.name) ||
      (order === "desc" && resB.name > resA.name)
    ) {
      return 1;
    } else {
      return -1;
    }
  });

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
    nextOrder: nextOrder,
  });
  // const htmlFilePath = path.join(__dirname, "views", "restaurants.html");
  // res.sendFile(htmlFilePath);
});

router.get("/restaurants/:id", (req, res) => {
  const restaurantId = req.params.id;

  //call storedRestaurants function from restaurant-data.js file
  const storedRestaurants = resData.getStoredRestaurants();

  //loop through our stored restaurants array
  for (const restaurant of storedRestaurants) {
    //look for the restaurant that matches the id the user selected
    if (restaurant.id === restaurantId) {
      //we want to render this page and pass on the following values
      //when we find the restaurant with the matching Id, return so that we stop the execution
      return res.render("restaurant-details", { restaurant: restaurant });
    }
  }
  //will render 404 page if the user tries searching for a non-existent restaurant id
  res.status(404).render("404");
});

router.get("/confirm", (req, res) => {
  res.render("confirm");
  // const htmlFilePath = path.join(
  //   __dirname,

  //   "views",
  //   "confirm.html"
  // );
  // res.sendFile(htmlFilePath);
});

router.get("/recommend", (req, res) => {
  res.render("recommend");
  // const htmlFilePath = path.join(
  //   __dirname,

  //   "views",
  //   "recommend.html"
  // );
  // res.sendFile(htmlFilePath);
});

router.post("/recommend", (req, res) => {
  console.log("post worked");
  const restaurant = req.body;
  //will return a unique string id
  restaurant.id = uuid.v4();
  console.log("set id");

  //calling js function in restaurant-data.js
  const restaurants = resData.getStoredRestaurants();
  console.log("getting restaurants");
  //push new user input into array
  restaurants.push(restaurant);
  console.log("adding restaurant");

  //calling js function in restaurant-data.js
  resData.storeRestaurants(restaurants);
  console.log("storing restaurant");

  //redirect users to confirm page
  res.redirect("/confirm");
});

module.exports = router;
