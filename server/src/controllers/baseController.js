const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");
const log = require("../utils/logger").logger;

exports.deleteOne = (Model) => async (req, res, next) => {
  log.info("baseController - deleteOne");
  try {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(
        new AppError(404, "fail", "No document found with that id"),
        req,
        res,
        next
      );
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateOne = (Model) => async (req, res, next) => {
  log.info("baseController - updateOne");
  try {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(
        new AppError(404, "fail", "No document found with that id"),
        req,
        res,
        next
      );
    }

    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.createOne = (Model) => async (req, res, next) => {
  log.info("baseController - createOne");
  console.log("createOne");
  try {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        doc,
      },
    });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};

exports.getOne = (Model) => async (req, res, next) => {
  log.info("baseController - getOne");
  try {
    const doc = await Model.findById(req.params.id);

    if (!doc) {
      return next(
        new AppError(404, "fail", "No document found with that id"),
        req,
        res,
        next
      );
    }

    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.getAll = (Model) => async (req, res, next) => {
  log.info("baseController - getAll");
  try {
    const features = new APIFeatures(Model.find(), req.query).sort().paginate();
    const doc = await features.query;

    res.status(200).json({
      status: "success",
      results: doc.length,
      data: doc,
    });
  } catch (error) {
    next(error);
  }
};
