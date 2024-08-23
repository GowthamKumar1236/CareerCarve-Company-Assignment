const Booking = require('../models/booking');
const Mentor = require('../models/mentor');
const Student = require('../models/student');

exports.createBooking = async (req, res) => {
    try {
        const { studentId, mentorId, duration } = req.body;
        const payment = duration === 30 ? 2000 : duration === 45 ? 3000 : 4000;

        const booking = await Booking.create({ studentId, mentorId, duration, payment });

        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
