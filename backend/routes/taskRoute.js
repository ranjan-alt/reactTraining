const express = require("express");

const router = express.Router();

const { addTask, getTask } = require("../controllers/taskController");

router.post("/addtask", addTask);
router.get("/gettask", getTask);

module.exports = router;
