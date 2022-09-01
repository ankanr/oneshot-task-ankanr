const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

router.get('/:college_id', async (req, res) => {
  try {
    const student = await Student.find({ college_id: req.params.college_id });
    res.json(student);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
