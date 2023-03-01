var express = require('express');

var app = express();

app.get('/', function (req, res) {
    return res.send("Hello World!");
})

app.listen(3000, function () {
    console.log('Running on http://localhost:3000');
})