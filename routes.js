const fs = require('fs')

const requestHandler=(req,res)=>{

    const { url, method } = req

    if (url === "/") {
        //Set Header
        res.setHeader('Content-Type', 'text/html')
        //Send Content
        res.write('<html>')
        res.write('<head><title>Node Js</title></head>')
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form></body>')
        res.write('<html>')
        return res.end();
    }
    if (url === "/create-user" && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            fs.writeFile('message.txt', username, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/')
                return res.end();
            })
        });
    }
}

module.exports=requestHandler