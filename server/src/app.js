const express = require("express");
const rateLimit = require("express-rate-limit");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const hpp = require("hpp");
const cors = require("cors");
const path = require("path");
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const globalErrHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");

const app = express();

app.use(cors());
app.use(helmet());

const limiter = rateLimit({
  max: 150,
  windowMs: 60 * 60 * 1000,
  message: "Too Many Request = require( this IP, please try again in an hour",
});
app.use("/api", limiter);

app.use(
  express.json({
    limit: "15kb",
  })
);

app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/blog", blogRoutes);

//For react app
let clientPath = path.join(__dirname, "..", "..", "build");

if (process.env.NODE_ENV === "production") {
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

app.use("*", (req, res, next) => {
  const err = new AppError(404, "fail", "undefined route");
  next(err, req, res, next);
});

app.use(globalErrHandler);

module.exports = app;
