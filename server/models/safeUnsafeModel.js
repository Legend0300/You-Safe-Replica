const mongoose = require('mongoose');

const safeUnsafeReportSchema = new mongoose.Schema({
  site: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Site',
    required: true,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true,
  },
  area: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Area',
    required: true,
  },
  actType: {
    type: String,
    required: true,
  },
  responsibility: {
    type: String,
    default: "NA",
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
    type: Date,
    required: true,
  },
  dueDate: {
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
