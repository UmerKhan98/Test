const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mern", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log(`DB connected`);
  })
  .catch(err => {
    console.error(err);
  });

app.get("/", (req, res) => {
  res.send("Allah u Akbar");
});
app.listen(7000);
