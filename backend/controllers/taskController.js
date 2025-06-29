const Task = require("../modals/taskModel");

const addTask = async (req, res) => {
  const { task, completed } = req.body;
  console.log(task, completed);
  const newTask = new Task({
    task,
    completed,
  });

  try {
    const saveTask = await newTask.save();
    res.status(201).json({ data: saveTask });
    console.log(saveTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).json({ data: task });
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};
module.exports = { addTask, getTask };
