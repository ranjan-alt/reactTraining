const Theme = require("../modals/ThemeModal");

const ThemeToggle = async (req, res) => {
  const theme = await Theme.findOne();
  res.json(theme);
};

module.exports = { ThemeToggle };
