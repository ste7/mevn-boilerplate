const User = require('../models/User');


exports.get_users = function (req, res) {
    User.find().exec(function (err, users) {
        if (err) return handleError(err);

        res.json(users);
    });
};


exports.get_unique = function (req, res) {
    let email = req.params.email;

    User.findOne({ email: email }).exec(function (err, user) {
        if (user) {
            res.send(false);
        } else {
            res.send(true);
        }
    });
};