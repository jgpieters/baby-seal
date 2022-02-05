const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 8080;

let clientPath = path.join(__dirname, "..", "build");

if (process.env.NODE_ENV == "production") {
  clientPath = path.join(__dirname, "..");
}
console.log("clientPath: " + clientPath);
console.log("process.env: " + process.env.NODE_ENV);

app.use(express.static(path.join(clientPath)));

app.get("/", (req, res) => {
  console.log("express route to serve webiste");
  res.sendFile(path.join(clientPath, "index.html"));
});

app.get("/test", (req, res) => {
  console.log("express route to serve website");
  res.send("nothing to see here, go away!");
});

app.listen(port);
