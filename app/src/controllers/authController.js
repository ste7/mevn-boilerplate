const User = require("../models/User");
const auth = require("../helper/auth");
const bcrypt = require('../helper/bcrypt.js');



exports.post_signup = function (req, res) {

    let hash_password = bcrypt.hash(req.body.password);

    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash_password
    });

    user.save();

    let payload = { id: user.id };
    let token = auth.encode(payload);

    res.json({
        data: {
            name: user.name,
            email: user.email
        },
        token: token
    });
};



exports.post_signin = function (req, res) {

    var email = req.body.email;
    var password = req.body.password;

    User.findOne({ email: email }).exec(function (err, user) {
        if (user === null) {

            res.sendStatus(401);
        }
        else if (bcrypt.compare(password, user.password)) {
            let payload = { id: user.id };
            let token = auth.encode(payload);

            res.json({
                data: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                },
                token: token
            });
        } else {
            res.sendStatus(401);
        }
    });
};



exports.get_auth = function (req, res, next) {
    res.sendStatus(200);
};