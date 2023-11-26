const express = require('express')
const AuthRouter = require('./routes/Auth')
const RegisterRouter = require('./routes/Register')
require('./src/db/config')

const app = express()
const PORT = process.env.PORT || 2000

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/api', AuthRouter)
app.use('/api',RegisterRouter)

app.listen(PORT, () => {
    console.log(`Connection established on ${PORT}`)
})
