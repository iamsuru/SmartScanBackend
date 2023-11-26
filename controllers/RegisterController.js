const Auth = require('../src/models/registerSchema')
const bcrypt = require('bcrypt')


const Register = async (req, res) => {
    const { name, email_id, password } = req.body
    console.log(req.body)
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            res.status(500).json({
                message: 'Error occurred while hashing the password'
            })
        } else {
            const new_user = new Auth({
                name,
                email_id,
                password: hash,
            })
            new_user.save()
                .then(() => {
                    res.status(201).json({
                        message: 'Successfully Registered'
                    })
                })
                .catch((err) => {
                    res.status(400).json({
                        message: `Error Occurred ${err}`
                    })
                })
        }
    })
}

module.exports = {Register}