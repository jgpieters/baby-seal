const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  title: { type: String, maxLength: 120, required: true },
  text: { type: String },
  images: { type: Array },
  url: { type: String, required: true },
  type: { type: String, maxLength: 50, required: true, unique: true },
  date: Date,
});

const Section = mongoose.model("Section", sectionSchema);
module.exports = Section;
