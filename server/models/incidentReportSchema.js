const mongoose = require('mongoose');

// Define Incident Report Schema
const incidentReportSchema = new mongoose.Schema({
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
    enum: ['In Progress', 'Pending', 'Completed'],
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
