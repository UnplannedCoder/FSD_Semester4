const express = require('express');
const router = express.Router();

const {
    addStudent,
    getStudents,
    updateStudent,
    deleteStudent
    // updateManyStudents,
    // deleteManyStudents
} = require('../controllers/studentController');

// Add Many Students
router.post('/', addStudent);

// Get One Student
router.get('/:id', getStudents);

// Update Many Students
// router.patch('/', updateManyStudents);
router.patch('/', updateStudent);

// Delete Many Students
// router.delete('/', deleteManyStudents);
router.delete('/', deleteStudent);

module.exports = router;     