var express = require('express');
var router = express.Router();
var request = require('../lib/home');

router.get('/',request);
router.post('/new',request);
router.post('/:id',request);

module.exports=router;
