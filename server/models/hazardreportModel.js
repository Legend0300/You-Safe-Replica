const mongoose = require('mongoose');

const hazardReportSchema = new mongoose.Schema({
  site: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  area: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  userType: {
    type: String,
    enum: ['Employee', 'Manager' , 'Area Manager' , 'Visitor'],
    required: true
  },
  reportedStatus: {
    type: String,
    enum: ['In Progress', 'Pending', 'Completed' , 'All'],
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

const HazardReport = mongoose.model('HazardReport', hazardReportSchema);

module.exports = HazardReport;
