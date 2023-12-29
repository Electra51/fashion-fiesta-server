const express = require("express");
const colors = require("colors");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8080;
//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Fashion fiesta...");
});
app.listen(port, () => {
  console.log(`App is running on port ${port}`.bgMagenta.white.bold);
});
