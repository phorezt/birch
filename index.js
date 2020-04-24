const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("birch 🌳"));

app.listen(port, () =>
  console.log(`Birch app listening at http://localhost:${port}`)
);
