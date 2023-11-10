const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const readerRouter = require("./routes/readers");
const loggerOne = require("./middlewares/loggerOne");

dotenv.config();

const {
  PORT = 3006,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://127.0.0.1:27017/newDB",
} = process.env;

mongoose
  .connect(MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((error) => console.log(error.message));

const app = express();

app.use(cors());
app.use(loggerOne);
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.status(200);
  response.send("API библиотеки");
});
// app.post("/", (request, response) => {
//   response.status(200);
//   response.send("Hello from POST!");
// });

app.use(readerRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
