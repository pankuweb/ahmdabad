const mongoose = require("mongoose");

const checkListParentSchema = new mongoose.Schema(
  {
    formNo: {
      type: Number,
    },
    one: {
      type: String,
    },
    two: {
      type: String,
    },
    three: {
      type: String,
    },
    four: {
      type: String,
    },
    five: {
      type: String,
    },
    six: {
      type: String,
    },
    seven: {
      type: String,
    },
    eight: {
      type: String,
    },
    nine: {
      type: String,
    },
    eleven: {
      type: String,
    },
    twelve: {
      type: String,
    },
    thirteen: {
      type: String,
    },
    forteen: {
      type: String,
    },
    fifteen: {
      type: String,
    },
    sixteen: {
      type: String,
    },
    seventeen: {
      type: String,
    },
    eightteen: {
      type: String,
    },
    ninteen: {
      type: String,
    },
    twenty: {
      type: String,
    },
    tone: {
      type: String,
    },
    ttwo: {
      type: String,
    },
    tthree: {
      type: String,
    },
    tfour: {
      type: String,
    },
    tfive: {
      type: String,
    },
    tsix: {
      type: String,
    },
    tseven: {
      type: String,
    },
    teight: {
      type: String,
    },
    tnine: {
      type: String,
    },
    t30: {
      type: String,
    },
    t31: {
      type: String,
    },
    t32: {
      type: String,
    },
    t33: {
      type: String,
    },
    t34: {
      type: String,
    },
    tbone: {
      type: String,
    },
    tbtwo: {
      type: String,
    },
    tbthree: {
      type: String,
    },
    tbfour: {
      type: String,
    },
    tb1one: {
      type: String,
    },
    tb1two: {
      type: String,
    },
    tb1three: {
      type: String,
    },
    tb1four: {
      type: String,
    },
    tb2one: {
      type: String,
    },
    tb2two: {
      type: String,
    },
    tb2three: {
      type: String,
    },
    tb2four: {
      type: String,
    },
    tb2five: {
      type: String,
    },
    tb2six: {
      type: String,
    },
    tb31: {
      type: String,
    },
    tb32: {
      type: String,
    },
    tb33: {
      type: String,
    },
    tb34: {
      type: String,
    },
    tb35: {
      type: String,
    },
    tb36: {
      type: String,
    },
    tb37: {
      type: String,
    },
    tb38: {
      type: String,
    },
    tb39: {
      type: String,
    },
    tb310: {
      type: String,
    },
    tb311: {
      type: String,
    },
    tb312: {
      type: String,
    },
    tb313: {
      type: String,
    },
    tb314: {
      type: String,
    },
    tb315: {
      type: String,
    },
    tb316: {
      type: String,
    },
    tb317: {
      type: String,
    },
    tb318: {
      type: String,
    },
    tb41: {
      type: String,
    },
    tb42: {
      type: String,
    },
    tb43: {
      type: String,
    },
    tb44: {
      type: String,
    },
    tb45: {
      type: String,
    },
    tb46: {
      type: String,
    },
    tb47: {
      type: String,
    },
    tb48: {
      type: String,
    },
    tb49: {
      type: String,
    },
    tb410: {
      type: String,
    },
    tb411: {
      type: String,
    },
    tb412: {
      type: String,
    },
    tb413: {
      type: String,
    },
    tb414: {
      type: String,
    },
    tb415: {
      type: String,
    },
    tb416: {
      type: String,
    },
    tb51: {
      type: String,
    },
    tb52: {
      type: String,
    },
    tb53: {
      type: String,
    },
    tb54: {
      type: String,
    },
    tb55: {
      type: String,
    },
    tb56: {
      type: String,
    },
    tb57: {
      type: String,
    },
    tb58: {
      type: String,
    },
    tb59: {
      type: String,
    },
    tb510: {
      type: String,
    },
    tb511: {
      type: String,
    },
    tb512: {
      type: String,
    },
    tb513: {
      type: String,
    },
    tb514: {
      type: String,
    },
    tb515: {
      type: String,
    },
    tb516: {
      type: String,
    },
    photo: {
      type: String,
    },
    sign: {
      type: String,
    },
    ULBInchargeSign: {
      type: String,
    },
    bill: {
      type: String,
    },
    checkupload: {
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
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const checkListParent = mongoose.model(
  "checkListParent",
  checkListParentSchema
);

module.exports = checkListParent;
