const express = require('express');
const path = require('path');
const http = require('http');
const ejs = require('ejs');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
const app = express();
var router = express.Router();
var schema = mongoose.Schema;
//CROS permission
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use('/hhh', router);

//API file for interacing with Mongo

var api = require('./server/routes/api');

// make mon go connectioncccc
mongoose.connect('mongodb://localhost/traveldata');
var db = mongoose.connection;

// check connection
db.once('open', function () {
    console.log("connected with mongoDB");
})

// check db error
db.on('error', function (err) {
    console.log(err);
});

//Getting our post route
var posts = require('./server/routes/posts');

///  middleware

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/home', posts);

// catch all other request and return it to index.html
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);


// body parser middleware..........
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// bring in models
let Users = require('./models/users');
let Agencynotification = require('./models/agencynotification');
let Guidernotification = require('./models/guidernotification');
let Review = require('./models/review');





/// mongo data print in html .....start

let respons = {
    status: 200,
    data: [],
    message: null
}

router.get('', function (req, res) {
    console.log("get user api run....");
    Users.find({}, function (err, users) {
        respons.data = users;
        res.json(respons);
    });

});

router.get('/reg', function (req, res) {
    console.log("post user api run....");
    console.log(req.query.email);
    console.log(req.query.password);
    console.log(req.query.utype);
    let user = new Users();
    user.email = req.query.email;
    user.password = req.query.password;
    user.type = req.query.utype;
    user.name = "";
    user.phone = "";
    user.telephone = "";
    user.address = "";
    user.save(function (err) {
        if (err) {
            res.send("save not data");

        }
        else {
            console.log("save data");

        }
    });



});

router.get('/reg/udel', function (req, res) {
    db.collection('agencys').remove({ "email": "new" }, function (err, result) {
        console.log(result);
        res.send("ok delete");
    });



});


router.get('/reg/udel/uupdt', function (req, res) {
    let email = req.query.email;
    let name = req.query.name;
    let phone = req.query.phone;
    let tel = req.query.telephone;
    let add = req.query.address;
    db.collection('agencys').updateOne({ "email": email }, { $set: { "name": name, "phone": phone, "telephone": tel, "address": add } }, function (err, result) {
        console.log(result);
        res.send("ok update");
    });



});


let resp = {
    status: 300,
    data: [],
    message2: null
}

router.get('/reg/udel/uupdt/userinfo', function (req, res) {
    let em = req.query.email;
    Users.find({}, function (err, users) {

        if (err) {
            console.log("log in error occurs!!!!");
        }
        else {
            for (const user in users) {
                if (users.hasOwnProperty(user)) {
                    const usr = users[user];
                    if (usr.email == em) {
                        resp.data = usr;
                        res.json(resp);
                        console.log('go to your browser and sahow single user info');
                        return;
                    }

                }
            }

        }
    });



});

///////admin update//////agency

router.get('/reg/udel/uupdt/userinfo/adminagnupdate', function (req, res) {


    let opType = req.query.operatype;
    let id = req.query.iid;
    let email = req.query.email;
    let password = req.query.password;
    let name = req.query.name;
    let phone = req.query.phone;
    let tel = req.query.telephone;
    let add = req.query.address;
    let lockstatus = req.query.lockstatus;
    let ObjectID = require('mongodb').ObjectID;

    if (opType == "logininfoedit") {
        db.collection('agencys').updateOne({ "_id": ObjectID(id) }, { $set: { "email": email, "password": password } }, function (err, result) {
            console.log(result);
            res.send("admin ok update");
        });
    }
    else if (opType == "lock") {
        db.collection('agencys').updateOne({ "_id": ObjectID(id) }, { $set: { "lockstatus": lockstatus } }, function (err, result) {
            console.log(result);
            res.send("admin lock ok update");
        });
    }
    else if (opType == "unlock") {
        db.collection('agencys').updateOne({ "_id": ObjectID(id) }, { $set: { "lockstatus": lockstatus } }, function (err, result) {
            console.log(result);
            res.send("admin unlock ok update");
        });
    }

    else if (opType == "agnproedit") {
        db.collection('agencys').updateOne({ "_id": ObjectID(id) }, { $set: { "name": name, "address": add, "phone": phone, "telephone": tel } }, function (err, result) {
            console.log(result);
            res.send("admin profile ok update");
        });
    }

});



router.get('/reg/udel/uupdt/userinfo/adminagnupdate/adminagndel', function (req, res) {
    let id = req.query.iid;
    let ObjectID = require('mongodb').ObjectID;
    db.collection('agencys').remove({ "_id": ObjectID(id) }, function (err, result) {
        console.log(result);
        res.send("ok delete");
    });

});


router.get('/reg/udel/uupdt/userinfo/adminagnupdate/adminagndel/agnadd', function (req, res) {
    let user = new Users();
    user.email = req.query.email;
    user.password = req.query.password;
    user.type = "agency";
    user.name = "";
    user.phone = "";
    user.telephone = "";
    user.address = "";
    user.lockstatus = "";
    user.save(function (err) {
        if (err) {
            res.send("save not data");

        }
        else {
            console.log("save data");

        }
    });

});



/// mongo data print in html .....start

const port = process.env.PORT || 4600;

app.listen(port, function () {
    console.log(" node server runnning. port ..." + port);
});




