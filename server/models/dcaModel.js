const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  Heading: {
    type: String,
    required: true
  },
  Question: {
    type: String,
    required: true
  }
});

const dcaSchema = new mongoose.Schema({
  formName: {
    type: String,
    required: true
  },
  type : {
    type: String,
    enum: ['DCA'],
    default: 'DCA',
    required: true
  },
  reportedStatus: {
    type: String,    
    enum: ['In Progress', 'Pending', 'Completed'],
    default: 'In Progress'
  },
  questions: [questionSchema]
  ,
  endDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  responsibility: {
    type: String,
    required: true
  },
  actionRemarks: {
    type: String,
    required: true
  }
});

const DCA = mongoose.model('DCA', dcaSchema);

module.exports = DCA;