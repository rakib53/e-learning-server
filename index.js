const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const categories = require("./learning-categories.json");
const category = require("./learning.json");

app.use(cors());

app.get("/allcategory", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const singleCategory = category.find((n) => {
    return n.id == id;
  });

  res.send(singleCategory);
});

app.listen(port);
