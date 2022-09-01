const mongoose = require('mongoose');

const collegeSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  year: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  noOfstudents: { type: Number, required: true },
  courses: [{ type: String, required: true }],
});

module.exports = mongoose.model('colleges', collegeSchema);
