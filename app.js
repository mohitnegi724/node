const http = require('http')
const fs = require('fs')
const routes = require('./routes');

const server = http.createServer(routes)

server.listen(3000,()=>{
    console.log("Server Started..")
})