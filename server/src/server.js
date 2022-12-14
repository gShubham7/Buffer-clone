require("dotenv").config();

const express = require("express");
const connect = require("./config/db");
const cors = require("cors");

const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(PORT, async () => {
  await connect();
  console.log(`Server listening on http://localhost:PORT`);
});
