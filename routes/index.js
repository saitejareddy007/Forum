/**
 * Created by Sai on 6/29/17.
 */
var express = require('express');
var router = express.Router();
var db = require('../repo/db');
var homeApi = require('../lib/home');
//require('es6-shim');

/* GET home page. */
router.get('/',function(req,response){
    homeApi.getAllElements(response);
});

router.post('/new',function (req, res) {
    homeApi.createPost(req.body.Name,req.body.post);
    res.redirect('/');
});

router.post('/:date',function (req, res) {
    homeApi.addComment(req.params.date,req.body.comment);
    res.redirect("/");
});

module.exports=router;
