const mongoose = require('mongoose');

const PIListSchema = new mongoose.Schema({
  header:{
    type: String,
    required: true
  },
    suitabilityCheckbox: {
        type: String,
        enum: ["Compliant", "Non-Compliant"],
        required: true
    },
    status: {
      type: String,
      enum: ['In Progress', 'Pending', 'Completed'],
      required: true
    },
    actionRemarks: {
      type: String,
      required: true
    },
    responsibility: {
      type: String,
      required: true
    },
    type : {
      type: String,
      enum: ['PI'],
      default: 'PI',
      required: true
    },
  });

const PIList = mongoose.model('PIList', PIListSchema);


module.exports = PIList
  