var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render("index");
})

app.get('/students/', function (req, res) {
    res.render("students");
})

app.listen(3000, function () {
    console.log("server started");

})