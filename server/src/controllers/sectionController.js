const Section = require("../models/sectionModel");
const base = require("./baseController");

exports.list = base.getAll(Section);
exports.get = base.getOne(Section);
exports.create = base.createOne(Section);
exports.update = base.updateOne(Section);
exports.delete = base.deleteOne(Section);
