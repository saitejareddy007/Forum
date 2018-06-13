/**
 * Created by Sai on 6/29/17.
 */
var express = require('express');
var router = express.Router();
var db = require('../repo/db');
var homeApi = require('../lib/home').getHomeAPIInstance();

//require('es6-shim');

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

    homeApi.createPost(params,function (err) {
        if (err) throw err;
        res.send({msg:"Your post has been created successfully."});
    });

});

router.post('/addcomment/:id',function (req, res) {
    // read and construct params var
    const params = req.params || {};
    params.postParams = req.body;

    homeApi.addComment(params,function (err) {
        res.redirect("/"+req.params.id);
    });

});
router.post('/deletePost/:id',function (req, res) {
    const params = req.params || {};
    homeApi.deletePost(params,function (err, result) {
        if(err) throw err;
        res.end("The post is deleted successfully");
    });
})
router.get('/comments/:id',function (req, res) {
    const params = req.params || {};
//    params.postParams = req.body;

    homeApi.viewComments(params,function (err, docs) {
        res.render('comments', {user: docs});
    });

});

module.exports=router;
