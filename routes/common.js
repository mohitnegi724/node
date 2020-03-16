const express = require('express');
const router = express.Router();
const users = require('./users/index');
const data = require("../data/index.json");
router.get('/',(req,res)=>{
    const { usersList} = users;
    res.render('home',{users :data})
})

module.exports = router;