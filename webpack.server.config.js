const path = require("path");
const { NODE_ENV = "production" } = process.env;

module.exports = {
  entry: "./server/index.js",
  mode: NODE_ENV,
  target: "node",
  output: {
    path: path.resolve(__dirname, "build", "server"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
