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
  imagesURL: {
    type:[String],
    default: ["https://cdn-icons-png.flaticon.com/512/6002/6002428.png"]
  },
  eventSubType: {
    type: String,
    required: true
  },
  incidentType: {
    type: String,
    required: true
  },
  reportedStatus: {
    type: String,
    enum: ['In Progress', 'Pending', 'Completed'],
    default: 'In Progress'
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
