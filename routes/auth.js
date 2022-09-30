const express = require('express')
const controller = require('../controllers/auth')
const Joi = require('joi')
const router = express.Router()

// localhost:3000/api/auth/login
router.post('/login', controller.login)
// localhost:3000/api/auth/register
router.post('/register', controller.register)
// localhost:3000/api/auth/get
router.get('/register', controller.getUsers)

module.exports = router

router.post('/accounts/', createAccountSchema, createAccount);
router.put('/accounts/:id', updateAccountSchema, updateAccount);

module.exports = router;

function createAccountSchema(req, res, next) {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
        role: Joi.string().valid('Admin', 'User').required()
    });
    validateRequest(req, next, schema);
}

function createAccount(req, res, next) {
    accountService.create(req.body)
        .then(account => res.json(account))
        .catch(next);
}

function updateAccountSchema(req, res, next) {
    const schemaRules = {

        email: Joi.string().email().empty(''),
        password: Joi.string().min(6).empty(''),
        confirmPassword: Joi.string().valid(Joi.ref('password')).empty('')
    };

    // only admins can update role
    if (req.user.role === 'Admin') {
        schemaRules.role = Joi.string().valid('Admin', 'User').empty('');
    }

    const schema = Joi.object(schemaRules).with('password', 'confirmPassword');
    validateRequest(req, next, schema);
}

function updateAccount(req, res, next) {
    accountService.update(req.params.id, req.body)
        .then(account => res.json(account))
        .catch(next);
}

// helper functions

function validateRequest(req, next, schema) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}