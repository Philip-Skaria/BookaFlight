const db = require('../config/database')

class User{
    static create(userData, callback) {
        const { name, email, password } = userData;
        const sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;

        db.run(sql, [name, email, password], function(err) {
            if (err) {
                callback(err, null);
            } else {
                callback(err, { id: this.lastID, name, email})
            }
        })
    }

    static findByEmail(email, callback) {
        const sql = 'SELECT * FROM users WHERE email = ?';
        db.get(sql, [email], (err, row) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, row);
            }
        })
    }

    static findById(id, callback) {
        const sql = 'SELECT * FROM users WHERE id = ?'

        db.get(sql, [id], (err, row) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, row);
            }
        })
    }
}

module.exports = User;