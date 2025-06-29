const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      require: true,
    },
    completed: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", TaskSchema);
