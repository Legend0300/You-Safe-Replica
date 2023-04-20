const mongoose = require('mongoose');

const reportingDetailsSchema = new mongoose.Schema({
Heading: {
    type: String,
    required: true
},
department: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
    date: {
    type: Date,
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
});

const reportingDetails = mongoose.model('ReportingDetails', reportingDetailsSchema);

module.exports = reportingDetails;
