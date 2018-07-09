const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const fs = require('fs');

app.use(express.static('public'));

app.use(bodyparser.urlencoded({
    extended: false
}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/userconnect', (req, res) => {
    res.render('userconnect');
});

//app

const server = app.listen(process.env.PORT || 8080, (req, res) => {
    console.log('Server Ok!');
});