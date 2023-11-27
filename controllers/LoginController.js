const Auth = require("../src/models/registerSchema")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Login = async (req,res) => {
    console.log('called');
    const { email_id, password } = req.body
    try {
        const auth = await Auth.findOne({ email_id })
        if (!auth) {
            return res.status(404).json({ message: 'User not found' })
        }
        const passwordMatch = await bcrypt.compare(password, auth.password)
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid Credentials' })
        }
        const token = await jwt.sign({user : auth},'asdfghjklmnbvcxz8520', {expiresIn: '1h'})
        res.cookie('auth-token',token,  { maxAge: 900000, httpOnly: true, secure:true })
        res.status(200).json({ message: 'Authentication successful', token : token, auth: auth })
    } catch (err) {
        res.status(500).json({ message: `Internal Server Error ${err}` })
    }
}

module.exports = {Login}