const mongoose = require('mongoose');

const PIListSchema = new mongoose.Schema({
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
    }
  });

const PIList = mongoose.model('PIList', PIListSchema);


module.exports = PIList
  