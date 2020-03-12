const express = require('express')
const notFound = express.Router()

notFound.use((req,res)=>{
    res.status(404).send(`<h3>not Found</h3>`)
})

module.exports = notFound;