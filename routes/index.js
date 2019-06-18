/**
 * Created by Sai on 6/29/17.
 */
let express = require('express');
let router = express.Router();
let db = require('../repo/db');
let homeApi = require('../lib/homeAPI').getInstance();
let {callAPI} = require('../lib/common-utils/router_functions');
let fn = require('../lib/common-utils/functions');
let {renderViewFromAPI} = require('../lib/common-utils/router_functions');

// require('es6-shim');

/* GET home page. */
router.get('/', (req, res) => {
    renderViewFromAPI(req, res, fn.bind(homeApi,"getAllElements"), 'index');
});

router.post("/getPosts/", (req, res) => {
    callAPI(req, res, fn.bind(homeApi,"getAllElements"));
});

router.post('/new',function (req, res) {
    callAPI(req, res, fn.bind(homeApi,"createPost"));
});

router.post('/add-comment/:id',function (req, res) {
    // read and construct params var
    const params = req.params || {};
    params.postParams = req.body;

    Home.addComment(params,function (err) {
        res.redirect("/"+req.params.id);
    });

});
router.post('/deletePost/:id',function (req, res) {
    callAPI(req, res, fn.bind(homeApi,"deletePost"));
});

router.get('/view-comments/:id',function (req, res) {
    renderViewFromAPI(req, res, fn.bind(homeApi,"viewComments"),"comments");
});

module.exports=router;
