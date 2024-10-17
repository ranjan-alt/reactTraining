const express = require("express");
const router = express.Router();

const { addTodo } = require("../controllers/todoController");

router.post("/addtodo", addTodo);

module.exports = router;
