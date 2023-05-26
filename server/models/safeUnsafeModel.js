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
  photos: {
    type: String,
  },

});

const SafeUnsafeReport = mongoose.model('SafeUnsafeReport', safeUnsafeReportSchema);

module.exports = SafeUnsafeReport;
