const mongoose = require("mongoose");
const dotenv = require("dotenv");
const http = require("http");
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err);
  // process.exit(1);
});

dotenv.config({ path: "./config.env" });
const app = require("./app");

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 4000;

const server = http.createServer(app);

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
});


server.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
