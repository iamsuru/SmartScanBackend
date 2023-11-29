const express = require('express')
const LoginController = require('../controllers/LoginController')
const RegisterController = require('../controllers/RegisterController')
const UploadFromMobile = require('../controllers/UploadFromMobile')
const router = express.Router()

router.post('/login', LoginController.Login)
router.post('/register', RegisterController.Register)
router.post('/sendLocationString', UploadFromMobile.getLocationString)
router.post('/uploadFromMobile', UploadFromMobile.handleFileUpload)
router.get('/getFilePath', UploadFromMobile.getFilePath)

module.exports = router