const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Mentor = sequelize.define('Mentor', {
    name: { type: DataTypes.STRING, allowNull: false },
    availability: { type: DataTypes.JSON, allowNull: false },
    areas_of_expertise: { type: DataTypes.JSON, allowNull: false },
    is_premium: { type: DataTypes.BOOLEAN, defaultValue: false }
});

module.exports = Mentor;
