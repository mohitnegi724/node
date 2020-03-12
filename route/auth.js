const express = require('express')
const auth = express.Router()
const bodyParser = require('body-parser')

auth.use(bodyParser.json())
auth.use(bodyParser.urlencoded({extended:false}))

auth.use("/auth",(req,res,next)=>{
    res.send('<html><head><title>Auth</title></head><body><form action="/admin/validate" method="POST"><input name="username" type="text"/><button type="submit">Submit</button></form></body></html>')
})

auth.post("/validate",(req,res,next)=>{
    const {username} = req.body;
    res.send(`<h4>${username} Validated.</h4>`)
})


module.exports = auth;