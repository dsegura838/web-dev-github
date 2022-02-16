//define our schema
const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    user: {
      //generate an Id
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      //reference user
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true.valueOf,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
