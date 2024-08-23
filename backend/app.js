const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const mentorRoutes = require('./routes/mentorRoutes');
const studentRoutes = require('./routes/studentRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', mentorRoutes);
app.use('/api', studentRoutes);
app.use('/api', bookingRoutes);

sequelize.sync()
    .then(() => console.log('Database & tables created!'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
