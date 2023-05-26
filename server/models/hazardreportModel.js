  const mongoose = require('mongoose');

  const hazardReportSchema = new mongoose.Schema({

    department: {
      type: String,
      ref : 'Department',
      required: true
    },
    area: {
      type: String,
      ref: 'Area',
      required: true
    },
    reportedStatus: {
      type: String,
      enum: ['In Progress', 'Pending', 'Completed'],
    },
    reportDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    photos: {
      type: String,
    },
    responsibility: {
      type: String,
      required: true,
      default: "",
    },
    type: {
      type: String,
      default: "hazard report"
    }
  });

  const HazardReport = mongoose.models.HazardReport || mongoose.model('HazardReport', hazardReportSchema);

  module.exports = HazardReport;
