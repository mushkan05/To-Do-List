const express = require("express");

const bodyParser = require("body-parser");
const app = express();
const todoRoutes = require("./routes/todos");
const authRoutes = require("./routes/auth");

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/todos", todoRoutes);
app.use("/api/auth", authRoutes);
app.post("/", (req, res) => {
  res.send("You can post to this endpoint...");
});

// const port = 3000;
// app.listen(port, () => {
//   console.log(`App is runnning on ${port}`);
// });
module.exports = app;
