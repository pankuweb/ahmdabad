const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const checkListParent = require("../models/checkListCatageroyModel");

// Add new checkchidlist ----
// -----------------------
exports.createchecklistParent = catchAsync(async (req, res, next) => {
  const checklistparent = await checkListParent.find();
  var test = req.body;
  test.formNo = checklistparent.length + 1;
  const newchecklistparent = await checkListParent.create(test);

  res.status(201).json({
    status: "success",
    message: "created successfully!",
    data: {
      checklistparent: newchecklistparent,
    },
  });
});

// Get all checklistparent ----
// -----------------------
exports.getAllchecklistParent = catchAsync(async (req, res) => {
  const checklistparent = await checkListParent.find().sort({ $natural: -1 });

  res.status(200).json({
    message: "success",
    message: "checklistparent fetched successfully!",
    results: checklistparent.length,
    data: {
      checklistparent: checklistparent,
    },
  });
});

// Update checklistparent ----
// -----------------------
exports.updatechecklistParent = catchAsync(async (req, res, next) => {
  const checklistparent = await checkListParent.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!checklistparent) {
    return next(new AppError("No checklistparent found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    message: "updated successfully",
    data: {
      checklistparent,
    },
  });
});

// Delete checklistparent ----
// -----------------------
exports.deletechecklistparent = catchAsync(async (req, res, next) => {
  const checklistparent = await checkListParent.findByIdAndDelete(
    req.params.id
  );

  if (!checklistparent) {
    return next(new AppError("No checklistparent found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      message: "checklistparent deleted successfully!",
    },
  });
});

exports.getUserByUn = catchAsync(async (req, res, next) => {
  const user = await checkListParent.find();

  if (!user) {
    return next(new AppError("No data found with that form no", 404));
  }

  res.status(200).json({
    status: "success",
    message: "fetched successfully!",
    data: {
      user,
    },
  });
});
