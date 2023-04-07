const mongoose = require('mongoose');

const dcReportSchema = new mongoose.Schema({
  site: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Site',
    required: true
  },
  formCompliant: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  userType: {
    type: String,
    required: true
  },
  Status: {
    type: String,
    enum: ['Enabled', 'Disabled'],
    default: 'Enabled'
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


const DCAReport = mongoose.model('DCAReport', dcReportSchema);

module.exports = DCAReport;

