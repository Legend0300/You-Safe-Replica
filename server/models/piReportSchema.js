const mongoose = require('mongoose');

const piReportSchema = new mongoose.Schema({
  site: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Site',
    required: true
  },
  pi: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PI',
    required: true
  } ,
  formCompliant: {
    type: String,
    enum: ["Compliant", "Non-Compliant"],
    required: true
  },
  userType: {
    type: String,
    enum: ['Employee', 'Visitor' , 'Manager' , 'Area Manager'],
    required: true
  },
  reportedStatus: {
    type: String,
    enum: ['Not Applicable', 'Completed' , 'Pending'],
    default: 'Not Applicable'
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

const PIReport = mongoose.model('PIReport', piReportSchema);

module.exports = PIReport;
