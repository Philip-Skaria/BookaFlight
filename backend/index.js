const express = require('express');
const path = require('path');
const authRoutes = require('./routes/auth');
const morgan  = require('morgan');

const app = express()
const PORT = 5000;

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// /api/auth/login for login endpoint
// /api/auth/signup for signup endpoint
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
})