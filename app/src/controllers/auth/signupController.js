const User = require('../../models/User.js');
const auth = require("../../helper/auth");
const bcrypt = require('../../helper/bcrypt.js');



exports.post_signup = function (req, res, next) {

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