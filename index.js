var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render("index");
})

app.post('/students/:studentName', function (req, res) {

    res.render("students",
        {
            studentName: req.params.studentName
        });
})

app.listen(3000, function () {
    console.log("server started");

})