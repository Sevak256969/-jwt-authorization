const express = require('express')
const controller = require('../controllers/auth')
const validation = require('./validation')
const router = express.Router()

// localhost:3000/api/auth/login
router.post('/login', controller.login)
// localhost:3000/api/auth/register
router.post('/register', validation, controller.register)

module.exports = router