const express = require('express');
const router = express.Router();
const College = require('../models/College');

router.get('/', async (req, res) => {
  try {
    const college = await College.find();
    res.json(college);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/id=:college_id', async (req, res) => {
  try {
    const college = await College.findOne({ id: req.params.college_id });
    const similar = await College.find({
      state: college.state,
      noOfStudents: college.noOfStudents,
    });

    const similarColleges = similar.filter(
      (sim) => parseInt(sim.id) !== parseInt(req.params.college_id)
    );

    if (college == [] || similarColleges == []) {
      res.json({ message: 'Sorry no such college found' });
    }

    res.json({
      college: college,
      similar: similarColleges,
      message: 'success',
    });
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.get('/name=:college_name', async (req, res) => {
  try {
    const college = await College.findOne({ name: req.params.college_name });
    const similar = await College.find({
      state: college.state,
      noOfStudents: college.noOfStudents,
    });

    //Used to split the courses into array
    // await College.aggregate([
    //   { $project: { courses: { $split: ['$courses', ','] } } },
    //   { $merge: 'colleges' },
    // ]);

    const similarColleges = similar.filter(
      (sim) => parseInt(sim.name) !== parseInt(req.params.college_name)
    );

    if (college == [] || similarColleges == []) {
      res.json({ message: 'Sorry no such college found' });
    }

    res.json({
      college: college,
      similar: similarColleges,
      message: 'success',
    });
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
