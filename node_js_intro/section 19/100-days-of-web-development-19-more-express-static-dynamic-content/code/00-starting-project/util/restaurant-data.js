//import file system
const fs = require("fs");
//import path package
const path = require("path");

//create file path as a global constant
const filePath = path.join(__dirname, "..", "data", "restaurants.json");

//creates a filepath, reads file contents, and returns the data parsed
function getStoredRestaurants(params) {
  //read the contents of the file
  const fileData = fs.readFileSync(filePath);

  //parse the file into a javascript array
  const storedRestaurants = JSON.parse(fileData);

  //return storedRestaurants when this function is called
  return storedRestaurants;
}

//function to write to our restaurants.json file
function storeRestaurants(restaurants) {
  //write the updated array data into our file as string
  fs.writeFileSync(filePath, JSON.stringify(restaurants));
}

module.exports = {
  getStoredRestaurants: getStoredRestaurants,
  storeRestaurants: storeRestaurants,
};
