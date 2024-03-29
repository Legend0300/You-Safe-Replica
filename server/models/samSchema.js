const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({

id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Visitor' || 'Manager' || 'AreaManager' || 'Employee' || 'Admin',
    required: true
} ,

name: {
    type: String,
    required: true
}
});


const safetyActionMeetingSchema = new mongoose.Schema({
    department: {
      type: String,
      required: true
    },
    area: {
      type: String,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    leader: {
      type: String,
      required: true
    },

    participants: [participantSchema],

    topic: {    
      type: String,
      required: true
    },
    outlineOfFacts: {
      type: String,
      required: true
    },
    questions: 
    {
        type: String,
    },
    type: {
      type: String,
      default: "safety action meeting"
    }
  });
  

const SafetyActionMeeting = mongoose.model('SafetyActionMeeting', safetyActionMeetingSchema);

module.exports = SafetyActionMeeting;