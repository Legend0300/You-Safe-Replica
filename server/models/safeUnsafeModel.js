const mongoose = require('mongoose');

const safeUnsafeReportSchema = new mongoose.Schema({
  site: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Site',
    required: true,
  },
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
  startDate: {
    type: Date
  },
  endDate: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    default: "safe unsafe report"
  },

});

const SafeUnsafeReport = mongoose.model('SafeUnsafeReport', safeUnsafeReportSchema);

module.exports = SafeUnsafeReport;
