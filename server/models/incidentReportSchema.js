const mongoose = require('mongoose');

// Define Incident Report Schema
const incidentReportSchema = new mongoose.Schema({
  department: {
    type: String,
    required: true
  },
  area: {
    type: String,
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
    enum: ['In Progress', 'Pending', 'Completed'],
    default: 'In Progress'
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  type: {
    type: String,
    default: "incident report"
  },
  responsibility: {
    type: String,
    required: true,
    default: "NA",
  }
});

// Create Incident Report model
const IncidentReport = mongoose.model('IncidentReport', incidentReportSchema);

module.exports = IncidentReport;
