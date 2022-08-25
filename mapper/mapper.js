const mapper = require('object-mapper')
const User = require('../models/User')


const mapping = mapper((map) => ({

    'email': map('email.type').value,
    'email': map('email.required').value,

    'password': map('password.type').value,
    'password': map('password.required').value,
}));

// function layer1(User user) {

// }
// function layer0() {
//     let user {...blabla}
//     layer1({name: user.name, email: user.email, phone: user.phone})
// }