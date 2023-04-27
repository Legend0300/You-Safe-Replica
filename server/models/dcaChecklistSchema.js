const mongoose = require('mongoose');

const DCAListSchema = new mongoose.Schema({
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
      enum: ['Not Applicable', 'Pending', 'Completed'],
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

const DCAList = mongoose.model('DCAList', DCAListSchema);


module.exports = DCAList
  