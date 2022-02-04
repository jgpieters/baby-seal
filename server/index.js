const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/", (req, res) => {
  console.log("express route to serve webiste");
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.get("/test", (req, res) => {
  console.log("express route to serve website");
  res.send("nothing to see here, go away!");
});

app.listen(port);
