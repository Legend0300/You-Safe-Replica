const mongoose = require('mongoose');

const reportingDetailsSchema = new mongoose.Schema({
Heading: {
    type: String,
    required: true
},
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
    type: mongoose.Schema.Types.ObjectId,
    required: true
    },
});

const reportingDetails = mongoose.model('ReportingDetails', reportingDetailsSchema);

module.exports = reportingDetails;
