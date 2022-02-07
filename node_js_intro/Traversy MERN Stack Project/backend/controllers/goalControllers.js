const asyncHandler = require("express-async-handler");

// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

// @desc Set Goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text fields");
  }
  res.status(200).json({
    message: "Set Goal",
  });
});

// @desc Update Goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `update goal ${req.params.id}`,
  });
});

// @desc Delete Goals
// @route DELETE /api/goals
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `delete goal ${req.params.id}`,
  });
});

//exporting get goals function
module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
