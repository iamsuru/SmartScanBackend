const express = require('express')
const AuthRouter = require('./routes/route')
const cors = require('cors')
// const RegisterRouter = require('./routes/Register')
require('./src/db/config')

const app = express()
const PORT = process.env.PORT || 2000

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(cors({
    origin : 'https://smartscanmern.netlify.com/',
    credentials:true,
}))

console.log('Server Updated');

// app.get('/',(req,res)=>{
//     res.end('started')
// })

// app.get('/api/login',(req,res)=>{
//     res.end('started login')
// })

app.use('/api', AuthRouter)
app.use('/api',AuthRouter)

app.listen(PORT, () => {
    console.log(`Connection established on ${PORT}`)
})
