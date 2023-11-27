const express = require('express')
const LoginController = require('../controllers/LoginController')
const RegisterController = require('../controllers/RegisterController')
const router = express.Router()

router.post('/login', LoginController.Login)
router.post('/register', RegisterController.Register)

module.exports = router