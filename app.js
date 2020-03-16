const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const common = require('./routes/common');
const users = require('./routes/users');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(common);
app.use('/routes', users.router);

app.listen(3000,()=>{
    console.log("the Server is connected");
})
