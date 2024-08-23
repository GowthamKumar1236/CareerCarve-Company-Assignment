const Mentor = require('../models/mentor');

exports.getMentors = async (req, res) => {
    try {
        const mentors = await Mentor.findAll();
        res.json(mentors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
