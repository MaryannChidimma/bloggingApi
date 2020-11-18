const { signup, login, remove } = require('../services/user');

const userSignup = (req, res, next) => {
    signup(req.body)
        .then(result => {
            const response = {
                user: result.user,
                token:result.token,
                success: true
            }
            res.status(201).json(response);
        })
        .catch(err => {
            next(err);
        });

}

const userLogin = (req, res, next) => {
    login(req.body)
        .then(result => {
            const response = {
                token: result.token,
                data: result.user,
                success: true
            }
            res.status(200).json(response)
        })
        .catch(err => {
            next(err)
        });
}

const deleteUser = (req, res, next) => {
    remove(req.params)
        .then(result => {
            const response = {
                message: "user deleted",
                success: true
            }
            res.status(200).json(response);
        })
        .catch(err => {
            next(err)
        });
}
module.exports = { userSignup, userLogin, deleteUser };