var express = require('express');
var request = express();
var router = require('../routes/index')

request.get('/',router);
request.post('/new',router);
request.post('/:id',router);

module.exports = request;
