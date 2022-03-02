const User = require("../models/userModel");
const base = require("./baseController");

exports.list = base.getAll(User);
exports.get = base.getOne(User);
exports.create = base.createOne(User);
exports.update = base.updateOne(User);
exports.delete = base.deleteOne(User);
