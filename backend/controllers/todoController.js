const Todo = require("../modals/Todo");

const addTodo = async (req, res) => {
  const { title } = req.body;
  const newTodo = new Todo({
    title,
  });

  try {
    const saveTodo = await newTodo.save();
    res.status(201).json({ data: saveTodo });
  } catch (error) {
    res.status(500).json({ message: "Failed to add todo" });
  }
};

module.exports = { addTodo };
