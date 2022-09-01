const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  year: { type: String, required: true },
  college_id: { type: String, required: true },
  skills: [{ type: String, required: true }],
});

module.exports = mongoose.model('students', studentSchema);
