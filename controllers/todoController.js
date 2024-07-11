const Todo = require("../models/Todo");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user.id });
    // const todos = await Todo.find();

    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id });
    res.json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.createTodo = async (req, res) => {
  const { title, description, completed } = req.body;
  console.log(req.user);
  const todo = new Todo({
    title,
    description,
    completed,
    userId: req.user.id,
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  const { title, description, completed } = req.body;

  if (title != null) {
    res.todo.title = title;
  }
  if (description != null) {
    res.todo.description = description;
  }
  if (completed != null) {
    res.todo.completed = completed;
  }

  try {
    const updatedTodo = await res.todo.save();
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    let todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "TODO item not found" });
    }

    // Ensure user owns the todo
    if (todo.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await Todo.findByIdAndRemove(req.params.id);

    res.json({ message: "TODO item removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
