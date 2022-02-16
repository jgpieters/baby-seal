require("dotenv").config({ path: "./server/src/config/config.env" });
const mongoose = require("mongoose");
const app = require("./app");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION!!! shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

let database = process.env.DATABASE.replace(
  "<username>",
  process.env.DATABASE_USERNAME
).replace("<password>", process.env.DATABASE_PASSWORD);

console.log(database);

// Connect the database
mongoose
  .connect(database, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("DB connection Successfully!");
  });

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION!!!  shutting down ...");
  console.log(err.name, err.message);
  app.close(() => {
    process.exit(1);
  });
});
