const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET


const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'No token, authorization denied'
        });
    }

    try {
        const actualToken = token.startsWith('Bearer ') ? token.slice(7) : token;

        const decoded = jwt.verify(actualToken, jwtSecret);

        User.findById(decoded.userId, (err, user) => {
            if (err || !user) {
                return res.status(401).json({
                    success: false,
                    message: 'Token is not valid'
                });
            }

            req.user = user;
            next();
        });
    } catch (err) {
        res.status(401).json({
            success: false,
            message: 'Token is not valid'
        });
    }
}


module.exports = authMiddleware;