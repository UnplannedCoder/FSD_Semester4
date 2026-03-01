const express = require('express');
const { connectDB } = require('./db_connection');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use('/students', studentRoutes);

// start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});