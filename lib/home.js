var db = require('../repo/db');
var Home    =
{
    getAllElements : function (res) {
        db.find({},function(err, docs) {
            res.render('index',{users:docs});
        });
    },

    createPost : function (name, post) {
        var date = new Date();
        new db({
            Name: name,
            Post: post,
            date: date.toString().substr(0, 24)
        }).save();
    },

    addComment :    function (id,comment) {
        var date    =   id;
        var comdate =   new Date().toString().substr(0,24);
        var query   =   {date: date};
        if(!comment==""){
            //res.send('<script>alert("Blank comment is not valid.")</script>')
            db.update(query,
                {
                    $push: {
                        comments: {
                            "content": comment ,
                            "createdAt": comdate
                        }
                    }
                },function (err) {
                    if (err) throw err;
                }
            );
        }
    }
}
module.exports=Home;
