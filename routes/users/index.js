const express = require('express');
const fs  = require('fs');
const data = require('../../data');
const router = express.Router();

router.post('/create-user', (req, res) => {
    const { username, contact, email} = req.body;
    data.push({
        username,
        contact,
        email
    });
    fs.writeFile('./data/index.json', JSON.stringify(data), (err, resp) => {
        if (err) throw err;
        res.redirect('/')
    });
})

router.get('/delete/:username',(req,res)=>{
    let filtered = data.filter(user=>user.username!==req.params.username);
    fs.writeFile('./data/index.json', JSON.stringify(filtered), (err)=>{
        if(err) throw err;
        res.redirect('/');
    })
})
exports.router = router;