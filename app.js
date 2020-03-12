const express = require('express')
const auth = require('./route/auth')
const home = require('./home')
const notFound = require('./notFound')
const app = express();

app.use('/admin',auth)
app.use(home)
app.use(notFound)

app.listen(3000,()=>{
    console.log("Server Started..")
})