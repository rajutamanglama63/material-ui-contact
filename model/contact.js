const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true
    }
});

const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;