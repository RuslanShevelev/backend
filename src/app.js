const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const cors = require('cors');
const readerRouter = require("./routes/readers");
const loggerOne = require('./middlewares/loggerOne');

dotenv.config();

const app = express();

const { PORT = 3005, API_URL = "http://127.0.0.1" } = process.env;

app.use(cors());
app.use(loggerOne);
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.status(200);
  response.send("Hello,World!");
});
app.post("/", (request, response) => {
  response.status(200);
  response.send("Hello from POST!");
});

app.use(readerRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
