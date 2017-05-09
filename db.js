const spicedPg = require('spiced-pg');
const bcrypt = require('./bcrypt');

let db = spicedPg(process.env.DATABASE_URL ||'postgres:postgres:postgres@localhost:5432/postgres');

module.exports.register = function(first, last, email, password) {
    return new Promise(function (resolve, reject) {
        bcrypt.hashPassword(password, function(err, hash) {
            if (err) {
                reject(err);

            } else {
                var query = "INSERT INTO users (first, last, email, password) VALUES ($1, $2, $3, $4) returning id";
                var qParams = [first, last, email, hash];

                db.query(query, qParams, function(err,results) {
                    if(!err) {
                        resolve(results.rows);
                    } else {
                        reject(err);
                    }
                });
            }
        })
    })
};

module.exports.login = function(email, password) {
    var query = 'SELECT * FROM users WHERE email = `$1`';
    return db.query(query, {email}).then(function(data) {
        return bcrypt.checkPassword(password, data.rows[0].password).then(function(doesMatch) {
            if(doesMatch) {
                return data;
            } else {
                throw new Error;
            }
        });
    })
};


module.exports.profile = function(img) {
    return new Promise(function (resolve, reject) {
        var query = 'INSERT INTO users (image) VALUES ($1) returning id';
        var qParams = [image];

        db.query(query, qParams, function(err, results) {
            if(!err) {
                resolve(results.rows);
            } else {
                reject(err);
            }
        });
    });
};

module.exports.editBio = function(bio, id) {
    return new Promise(function (resolve, reject) {
        var query = 'UPDATE users SET bio=$1 WHERE id=$2';
        var qParams = [bio, id];
        console.log(bio, id);

        db.query(query, qParams, function(err, results) {
            if(!err) {
                resolve(results.rows);
            } else {
                reject(err);
            }
        });
    });
};
