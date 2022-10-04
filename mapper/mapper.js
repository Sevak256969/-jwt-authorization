const mapper = require('object-mapper')
const User = require('../models/User')

let map = {
  "email": 
    {
      key: "email",
      transform: function (value) { 
        return value
      }
    },
    
  "password": {
      key: "password",
      transform: function (value) { 
        return value
      }
    },
};
 
let src = {
    email: '',
    password: ''
};
module.exports.mapping =  mapper(src, map);