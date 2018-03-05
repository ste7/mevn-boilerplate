const mongoose = require('../database/db');
const Schema = mongoose.Schema;


const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type : String,
        required : true
    },
    createdAt: {
        type : Date,
        default : Date.now
    },
    updatedAt: {
        type : Date,
        default : Date.now
    }
});


module.exports = mongoose.model('users', schema);