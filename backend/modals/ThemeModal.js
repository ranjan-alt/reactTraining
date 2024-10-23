const mongoose = require("mongoose");

const ThemeSchema = new mongoose.Schema({
  isDarkMode: {
    type: Boolean,
    default: false, // Set the default value to false
  },
});

module.exports = mongoose.model("Theme", ThemeSchema);
