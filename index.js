const express = require('express');
const session = require('cookie-session');
const bodyParser = require('body-parser');
const googleTranslate = require('google-translate')("AIzaSyAiEWinfXNu3fTgKlZfW3yOVfQLeCyFUY8");
const db = require('./db');
const app = express();

if (process.env.NODE_ENV != 'production') {
    app.use(require('./build'));
}
app.use(express.static('./public'))
app.use(session({
    maxAge: 1000 * 60 * 60,
    secret: 'asdf'
}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(function(req,res,next) {
    if(!req.session.user) {
        if(req.url != '/welcome' && req.url != '/register') {
            res.redirect('/welcome');
            return;
        }
    }
    next();
})

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/welcome', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/register', function(req,res) {
    var first = req.body.first;
    var last = req.body.last;
    var email = req.body.email;
    var password = req.body.password;

    db.register(first, last, email, password).then(function(data) {
        req.session.user = {
            first: first,
            last: last,
            id: data[0].id
        };
        res.json({
            success: true
        });
    }).catch(function(err) {
        console.log(err);
        res.json({
            success: false
        })
    });
});

app.post('/login', function(req,res) {
    var email = req.body.email;
    var password = req.body.password;

    db.login(email, password).then(function(data) {
        req.session.user = {
            id: data.id,
            first: data.first,
            last : data.last,
            image : data.image
        };
        res.json({
            success: true
        });
    }).catch(function(err) {
        console.log(err);
        res.json({
            success: false
        })
    });
});

app.post('/search', function(req,res) {
    console.log("/search");
    // db.search(req.body.search);
})

app.post('/editbio', function(req,res) {
    db.editBio(req.body.bio, req.session.user.id).then(function(data) {
        req.session.user.bio = req.body.bio;
        res.json({
            success: true
        });
    }).catch(function(error){
        res.json({
            success: false
        });
    })
})

app.get('/user',function(req,res) {
    res.json({
        id: req.session.user.id,
        first : req.session.user.first,
        last : req.session.user.last,
        image : req.session.user.image,
        bio: req.session.user.bio
    });
})


app.post('/list', function(req,res) {
    console.log("/list");
})

app.listen(8000, function() {
    console.log("I'm listening.")
});
