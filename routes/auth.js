const express = require('express')
const controller = require('../controllers/auth')
const validate = require('./validation')
const Joi = require('joi')
const router = express.Router()

// localhost:3000/api/auth/login
router.post('/login', controller.login)
// localhost:3000/api/auth/register
router.post('/register', validate, controller.register)

module.exports = router