const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// GET POST
router.get('/', function(req, res){
res.render('test',{
    name: 'Home Page'
});
});

module.exports = router;