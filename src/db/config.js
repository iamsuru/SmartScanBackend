const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://smartscandb:noJMlsm4RPPl6Q7D@cluster0.p5ccb1d.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('Database connection successful')
})
.catch((err)=>{
    console.log(`Database connection failed\n${err}`)
}) 