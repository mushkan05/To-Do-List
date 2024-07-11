const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");
const authenticateToken = require("../middlewares/auth");
const { validateTodo } = require("../validations/validateTodo");

router.get("/", authenticateToken, todoController.getAllTodos);
router.get("/:id", authenticateToken, getTodo, todoController.getTodo);
router.post("/", authenticateToken, validateTodo, todoController.createTodo);
router.put(
  "/:id",
  authenticateToken,
  getTodo,
  validateTodo,
  todoController.updateTodo
);
router.delete("/:id", authenticateToken, getTodo, todoController.deleteTodo);

async function getTodo(req, res, next) {
  let todo;
  try {
    todo = await Todo.findById(req.params.id);
    if (todo == null) {
      return res.status(404).json({ message: "Cannot find todo" });
    }
    if (todo.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.todo = todo;
  next();
}

module.exports = router;
