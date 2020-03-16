const express = require('express');
const router = express.Router();
const usersList = [];

router.post('/create-user', (req, res) => {
    const { username, contact, email} = req.body;
    usersList.push({
        username,
        contact,
        email
    });
    res.redirect('/');
})

exports.router = router;
exports.usersList = usersList;