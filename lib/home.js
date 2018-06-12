var db = require('../repo/db');

class Home {
    getAllElements(params,cb1,cb2) {
        const postParams = params.postParams;
        const email = postParams.loginId;
        const password = postParams.password;
        db.dbOfAccounts.findOne({Email:email.toString()},function (err,result) {
            if(!result)
                cb2();

            else if(password == result.Password){
                db.dbOfPosts.find({}, cb1)
            }

            else
                cb2();
        });
    }
    createForumAccount(params,cb){
        const postParams = params.postParams;
        const name = postParams.name;
        const email = postParams.username;
        const password = postParams.newPassword;
        new db.dbOfAccounts({
            Name:name,
            Email:email,
            Password:password
        }).save(cb);
    }

    createPost(params,cb) {
        const postParams = params.postParams;
        const name = params.Name;
        const id=   params._id;
        console.log(id);
        const post = postParams.post;
        var date = new Date().toString().substr(0,24);
        new db.dbOfPosts(
            {
                idOfPost:id,
                Name:name,
                Post:post,
                date:date
            }
        ).save(cb);
    }

    deletePost(params,cb){
        var date =params.id;
        db.findOneAndRemove({date:date}, cb);
    }

    addComment(params,cb) {
        const id = params.id;
        const comment = params.postParams && params.postParams.comment || "";
        var comdate =   new Date().toString().substr(0,24);
        var query   =   {_id: id};
        if(!comment==""){
            db.dbOfPosts.update(query,
                {
                    $push: {
                        comments: {
                            "content": comment ,
                            "createdAt": comdate
                        }
                    }
                },cb
            );
        }
    }

    viewComments(params, cb) {
        var id =params.id;
        db.dbOfPosts.findById(id, cb);
    }
}

// returns an application wide static instance of homeAPI
function getHomeAPIInstance() {
    const home = new Home();
    return home;
}

exports.getHomeAPIInstance = getHomeAPIInstance;
