const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("../To-Do List/app");

const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection successful"));

const port = 3000;

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});

//SAVE
