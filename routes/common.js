const express = require('express');
const router = express.Router();
const users = require('./users/index');
const path  = require('path')

router.get('/',(req,res)=>{
    const { usersList} = users;
    res.render('home',{users :usersList})
})

module.exports = router;