const jwt = require('jsonwebtoken');
const User = require('../models/User');
const secret = 'shhhhh';
const expire = { expiresIn: '2 days' };



exports.encode = function (payload) {
    let token = jwt.sign(payload, secret, expire);

    return token;
};


exports.verify = function (req, res, next) {

    let bearerToken = req.headers['authorization'];

    if (bearerToken) {

        let splitBearer = bearerToken.split(' ');

        var token = splitBearer[1];

        jwt.verify(token, secret, function(err, decoded) {
            if (decoded) {
                next();
            } else {
                res.sendStatus(403);
            }
        });
    } else {
        res.sendStatus(403);
    }
};