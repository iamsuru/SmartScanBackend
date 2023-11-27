const Auth = require("../src/models/registerSchema")
const bcrypt = require('bcrypt')

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
        res.status(200).json({ message: 'Authentication successful', auth: auth })
    } catch (err) {
        res.status(500).json({ message: `Internal Server Error ${err}` })
    }
}

module.exports = {Login}