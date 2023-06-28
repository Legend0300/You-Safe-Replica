  const mongoose = require('mongoose');

  const safeUnsafeReportSchema = new mongoose.Schema({
    department: {
      type: String,
      required: true
    },
    area: {
      type: String,
      required: true
    },
    actType: {
      type: String,
      required: true,
    },
    responsibility: {
      type: String,
      required: true, 
      default: "",
    },
    reportedStatus: {
      type: String,
      required: true,
    },
    reportDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    type: {
      type: String,
      default: "safe unsafe report"
    },
    description: {
      type: String,
      required: true,
    },
    imagesURL: {
      type:[String],
      default: ["https://cdn-icons-png.flaticon.com/512/6002/6002428.png"]
    },

  });

  const SafeUnsafeReport = mongoose.model('SafeUnsafeReport', safeUnsafeReportSchema);

  module.exports = SafeUnsafeReport;
