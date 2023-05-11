const mongoose = require('mongoose');

const hazardReportSchema = new mongoose.Schema({
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'Department',
    required: true
  },
  area: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Area',
    required: true
  },
  reportedStatus: {
    type: String,
    enum: ['In Progress', 'Pending', 'Completed'],
    required: true
  },
  reportDate: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  photos: {
    type: String,
    required: true
  },
  responsibility: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: "hazard report"
  }
});

const HazardReport = mongoose.model('HazardReport', hazardReportSchema);

module.exports = HazardReport;
