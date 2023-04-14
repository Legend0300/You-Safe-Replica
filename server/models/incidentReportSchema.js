const mongoose = require('mongoose');

// Define Incident Report Schema
const incidentReportSchema = new mongoose.Schema({
  site: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Site',
    required: true
  },
  department: {
    ref: 'Department',
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  area: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Area',
    required: true
  },
  eventType: {
    type: String,
    required: true
  },
  eventSubType: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    required: true
  },
  reportedStatus: {
    type: String,
    required: true
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

// Create Incident Report model
const IncidentReport = mongoose.model('IncidentReport', incidentReportSchema);

module.exports = IncidentReport;
