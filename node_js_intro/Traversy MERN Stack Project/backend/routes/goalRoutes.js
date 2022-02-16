const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalControllers");
//import protect
const { protect } = require("../middleware/authMiddleware");

//assigning commonly used paths
router.route("/").get(protect, getGoals).post(protect, setGoal);
//update and delete require id in path
router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);

//export router to other files
module.exports = router;
