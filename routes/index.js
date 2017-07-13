/**
 * Created by Sai on 6/29/17.
 */
var express = require('express');
var router = express.Router();
var db = require('../repo/db');
var homeApi = require('../lib/home').getHomeAPIInstance();
require('es6-shim');

/* GET home page. */
router.get('/',function(req,res){
    homeApi.getAllElements(function(err, docs) {
        res.render('index', {users: docs});
    });
});

router.post('/new',function (req, res) {
    // read and construct params var
    const params = req.params || {};
    params.postParams = req.body;

    homeApi.createPost(params,function () {
        res.send({msg:"Your post has been created successfully."});
    });


});

router.post('/addcomment/:date',function (req, res) {
    // read and construct params var
    const params = req.params || {};
    params.postParams = req.body;

    homeApi.addComment(params);
    res.redirect("/"+req.params.date);
});

router.get('/:date',function (req, res) {
    const params = req.params || {};
//    params.postParams = req.body;

    homeApi.viewComments(params,function (err, docs) {
        res.render('comments', {user: docs});
    });
});

module.exports=router;
