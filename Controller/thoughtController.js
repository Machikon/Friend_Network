const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

// GET all thoughts
module.exports = {
    // Get all students
    getStudents(req, res) {
      Student.find()
        .then(async (students) => {
          const studentObj = {
            students,
            headCount: await headCount(),
          };
          return res.json(studentObj);
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },