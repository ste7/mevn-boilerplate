const User = require("../../models/User");
const auth = require("../../helper/auth");
const bcrypt = require('../../helper/bcrypt.js');



exports.post_signin = function (req, res, next) {

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