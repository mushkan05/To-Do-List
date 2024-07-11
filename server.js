const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("../To-Do List/app");

const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection successful"));

// console.log(process.env);
// console.log(process.env.PORT);
const port = 3000;
// const port = 8000;

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});

//SAVE
