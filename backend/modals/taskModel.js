const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      require: true,
    },
    compeleted: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", TaskSchema);
