const Student = require('../models/student');

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
