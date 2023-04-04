const mongoose = require('mongoose');

const AccountTypeEnum = Object.freeze({
  EMPLOYEE: 'Employee',
  VISITOR: 'Visitor'
});

const UserAccountSchema = new mongoose.Schema({
  picture: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  accountType: {
    type: String,
    enum: [AccountTypeEnum.EMPLOYEE, AccountTypeEnum.VISITOR],
    required: true
  },
  employeeId: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', UserAccountSchema);

module.exports = User;
