const Blog = require("../models/blogModel");
const base = require("./baseController");

exports.list = base.getAll(Blog);
exports.get = base.getOne(Blog);
exports.create = base.createOne(Blog);
exports.update = base.updateOne(Blog);
exports.delete = base.deleteOne(Blog);
