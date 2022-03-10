const Vlog = require("../models/vlogModel");
const base = require("./baseController");

exports.list = base.getAll(Vlog);
exports.get = base.getOne(Vlog);
exports.create = base.createOne(Vlog);
exports.update = base.updateOne(Vlog);
exports.delete = base.deleteOne(Vlog);
