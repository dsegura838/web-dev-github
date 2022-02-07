const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalControllers");

//assigning commonly used paths
router.route("/").get(getGoals).post(setGoal);
//update and delete require id in path
router.route("/:id").delete(deleteGoal).put(updateGoal);

//export router to other files
module.exports = router;
