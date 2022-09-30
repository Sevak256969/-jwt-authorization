const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('users', userSchema)

// const schema = Joi.object({ 
//   email: Joi.string().alphanum().min(3).max(30).required(),
//   password: Joi.string().alphanum().min(8).max(30).required()
// }); 
// const dataToValidate = { 
//     email: 'chris@gmail.com', 
//    password: 'dsjkfkdskjdkjdgskjg' 
// }
// const result = schema.validate(dataToValidate);
// module.exports = mongoose.model('users', schema)
