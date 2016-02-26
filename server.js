var express = require('express')
var app = express()
var timeService = require('./timeService.js')

app.get('/:time',timeService);

app.listen(3000)