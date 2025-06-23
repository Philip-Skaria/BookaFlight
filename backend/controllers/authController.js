require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const jwtSecret = process.env.JWT_SECRET

// Signup
const signup = (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Please provide name, email and password'
        });
    }

    User.findByEmail(email, (err, existingUser) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Server Error1'
            });
        }

        if (existingUser) {
            return res.state(400).json({
                success: false,
                message: 'User already exists with this email'
            });
        }

        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Server Error2'
                });
            }

            // Create new user
            User.create({ name, email, password: hashedPassword }, (err, user) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Failed to create User'
                    })
                }

                const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });

                res.status(201).json({
                    success: true,
                    message: 'User Created Successfully',
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    },
                    token
                })
            })
        })
    })
}


// Login User
const login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Please provide email and password'
        });
    }

    User.findByEmail(email, (err, user) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Server error'
            });
        }

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        // Compare password
        bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
            return res.status(500).json({
            success: false,
            message: 'Server error'
            });
        }

        if (!isMatch) {
            return res.status(400).json({
            success: false,
            message: 'Invalid email or password'
            });
        }

        // Create JWT token
        const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });

        res.json({
            success: true,
            message: 'Login successful',
            user: {
            id: user.id,
            name: user.name,
            email: user.email
            },
            token
        });
        });
    });
};


// logout
const logout = (req, res) => {
    res.json({
        success: true,
        message: 'Logout Successful'
    })
}

module.exports = { signup, login, logout };