const bcrypt = require('bcryptjs');


exports.hash = function(value) {
    var salt = bcrypt.genSaltSync(10);
    var result = bcrypt.hashSync(value, salt);

    return result;
};

exports.compare = function(password, hash) {
    let result = bcrypt.compareSync(password, hash);

    return result;
};