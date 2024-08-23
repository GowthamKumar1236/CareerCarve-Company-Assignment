const express = require('express');
const { getMentors } = require('../controllers/mentorController');
const router = express.Router();

router.get('/mentors', getMentors);

module.exports = router;
