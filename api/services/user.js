const mongoose = require('mongoose')
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const signup = (data) => {
    const { email, password } = data
    return new Promise((resolve, reject) => {
        User.find({ email: email })
            .then(user => {
                if (user.length >= 1) {
                    const err = new Error('email already exists');
                    err.status = 422;
                    return reject(err);
                }
                else {
                    bcrypt.hash(password, 10, (err, hash) => {
                        if (err) return reject(err);

                        const user = new User({
                            _id: mongoose.Types.ObjectId(),
                            email: email,
                            password: hash
                        })
                        user.save()
                            .then(user => {
                                const token = generateJwtToken(user.email, user._Id)
                                return resolve({user: user, token: token});
                            })
                            .catch(err => {
                                return reject(err);
                            });

                    })

                }
            });
    });
}

const login = (data) => {
    const { email, password } = data;
    return new Promise((resolve, reject) => {
        User.findOne({ email: email })
            .exec()
            .then(user => {
                if (!user) {
                    const err = new Error('email does not exist');
                    err.status = 404;
                    return reject(err);
                }
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) {
                        return reject(err)
                    }
                    if (isMatch) {
                        const token = generateJwtToken(user.email, user._Id)
                        return resolve({ token: token, user: user });
                    } else {
                        const err = new Error('password is incorrect');
                        err.status = 401;
                        return reject(err)
                    }

                })
            })
            .catch(err => {
                reject(err);
            })
    })
}

const generateJwtToken = (email, id) => {
    return jwt.sign({
        email: email,
        user_Id: id
    },
        process.env.JWT_KEY,
        { expiresIn: '1h' }
    );
}
const remove = (data) => {
    const { userId } = data
    return new Promise((resolve, reject) => {
        User.remove({ _id: userId })
            .exec()
            .then(result => {
                resolve(result)
            })
            .catch(err => {
                reject(err)
            })
    })
}

module.exports = { signup, login, remove };