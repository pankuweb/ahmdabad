const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
var format = require("date-format");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    combo: {
      type: String,
    },
    txt_answer: {
      type: String,
    },
    password: {
      type: String,
    },
    salutation: {
      type: String,
    },
    gender: {
      type: String,
    },
    sign: {
      type: String,
    },
    pmayCode4: {
      type: String,
    },
    txt_FirstName: {
      type: String,
    },
    txt_MiddleName: {
      type: String,
    },
    txt_LastName: {
      type: String,
    },
    txt_dob: {
      type: String,
    },
    txt_age: {
      type: String,
    },
    txt_Mobile: {
      type: String,
    },
    txt_Email: {
      type: String,
    },
    unique_id: {
      type: String,
    },
    building: {
      type: String,
    },
    Society: {
      type: String,
    },
    cmb_2_Country: {
      type: String,
    },
    cmb_2_State: {
      type: String,
    },
    cmb_2_Division: {
      type: String,
    },
    cmb_2_District: {
      type: String,
    },
    txt_2_District: {
      type: String,
    },
    cmb_2_Taluka: {
      type: String,
    },
    cmb_2_Village: {
      type: String,
    },
    txt_2_pin: {
      type: String,
    },
    chk_sms: {
      type: String,
    },
    chk_email: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
  { versionKey: false }
);

userSchema.pre("save", async function (next) {
  this.updatedAt = Date.now();
  // Only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  // False means NOT changed
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
