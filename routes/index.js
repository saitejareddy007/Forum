/**
 * Created by Sai on 6/29/17.
 */
var express = require('express');
var router = express.Router();
var db = require('../repo/db');
var homeApi = require('../lib/home');
require('es6-shim');

/* GET home page. */
router.get('/',function(req,res){
    homeApi.getAllElements(res);
});

router.post('/new',function (req, res) {
    homeApi.createPost(req.body.Name,req.body.post);
    res.redirect('/');
});

router.post('/addcomment/:date',function (req, res) {
    homeApi.addComment(req.params.date,req.body.comment);
    console.log(req.params.date);
    res.redirect("/"+req.params.date);
});

router.get('/:date',function (req, res) {
    console.log(req.params.date);
    homeApi.viewComments(res,req.params.date);
});

module.exports=router;
