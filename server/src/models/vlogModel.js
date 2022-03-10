const mongoose = require("mongoose");

const vlogSchema = new mongoose.Schema({
  title: { type: String, maxLength: 120, required: true },
  text: { type: String },
  url: { type: String, required: true },
  date: Date,
});

const Vlog = mongoose.model("Vlog", vlogSchema);
module.exports = Vlog;
