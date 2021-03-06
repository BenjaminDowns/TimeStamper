var express = require('express')
var app = express()
var timeService = require('./timeService.js')
var path = require('path')
var port = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname, 'public')));

app.get('/:time', timeService);

app.get('*', function(req, res) {
    res.render('index.html')
})

app.listen(port)