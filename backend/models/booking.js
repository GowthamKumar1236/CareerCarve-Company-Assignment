const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Mentor = require('./mentor');
const Student = require('./student');

const Booking = sequelize.define('Booking', {
    duration: { type: DataTypes.INTEGER, allowNull: false },
    payment: { type: DataTypes.INTEGER, allowNull: false },
});

Booking.belongsTo(Mentor);
Booking.belongsTo(Student);

module.exports = Booking;
