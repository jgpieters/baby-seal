const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, maxlength: 800 },
  image: String,
  author: { type: String, required: true },
  date: Date,
  paragraphs: [
    {
      title: String,
      text: String,
      image: String,
      quote: String,
    },
  ],
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
