/**
 * Created by Sai on 6/29/17.
 */
var express = require('express');
var router = express();
var index = require('../lib/home');

router.use('/',index);

module.exports=router;
