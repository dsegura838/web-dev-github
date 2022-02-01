//import express
const express = require("express");
//instead of using express as a function, we will use the Router()
//acts the same as app
const router = express.Router();

router.get("/", (req, res) => {
  //pass in the name of the file that should be rendered
  res.render("index");
  // const htmlFilePath = path.join(
  //   __dirname,

  //   "views",
  //   "index.html"
  // );
  // res.sendFile(htmlFilePath);
});

router.get("/about", (req, res) => {
  res.render("about");
  // const htmlFilePath = path.join(__dirname, "views", "about.html");
  // res.sendFile(htmlFilePath);
});

module.exports = router;
