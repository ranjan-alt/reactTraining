const express = require("express");
const router = express.Router();

const { ThemeToggle } = require("../controllers/ThemeController");

router.get("/themetoggle", ThemeToggle);

module.exports = router;
