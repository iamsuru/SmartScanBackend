const express = require('express')
const RegisterController = require('../controllers/RegisterController')
const router = express.Router()

router.post('/register',RegisterController.Register)

module.exports = router