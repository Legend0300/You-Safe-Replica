const mongoose = require('mongoose');

const piReportSchema = new mongoose.Schema({
  site: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Site',
    required: true
  },
  formCompliant: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    required: true
  },
  reportedStatus: {
    type: String,
    enum: ['Open', 'Closed'],
    default: 'Open'
  },
  reportDate: {
    type: Date,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('PIReport', piReportSchema);
