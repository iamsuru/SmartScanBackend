const multer = require('multer');
const path = require('path');
const fs = require('fs');

const getLocationString = (req, res, next) => {
    try {
        res.setHeader('Content-Type', 'application/json')
        const location = req.body.location
        console.log('Location ', location);
        res.status(200).json({ message: 'Location received successfully' })
        req.location = location
        next()
    } catch (error) {
        console.error('Error handling request:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

const mobileUploadStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join('uploads', 'user')
        fs.mkdirSync(uploadPath, { recursive: true })
        cb(null, uploadPath)
    },
    filename: function (req, file, cb) {
        const pdfName = req.location
        const fileExtension = path.extname(file.originalname)
        cb(null, `${pdfName}${fileExtension}`)
    }
})

const uploadFromMobile = multer({ storage: mobileUploadStorage }).single('document-to-upload')

const handleFileUpload = (req,res) => {
    uploadFromMobile(req,res,(err) => {
        if(err instanceof multer.MulterError){
            res.status(500).json({ error: 'File upload error' })
        }
        else if(err){
            console.error('Error uploading file:', err)
            res.status(500).json({ error: 'Internal Server Error' })
        }
        else{
            res.status(200).json({ message: 'File uploaded successfully' })
        }
    })
}

module.exports = { getLocationString, handleFileUpload }