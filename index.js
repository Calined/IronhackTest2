var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render("index");
})

app.post('/students', function (req, res) {

    studentName = res.get("studentName");

    console.log(studentName);

    res.render("students",
        {
            studentName: studentName
        });
})

app.listen(3000, function () {
    console.log("server started");

})