var db = require('../repo/db');

class Home {
    getAllElements(cb) {
        db.find({}, cb);
    }

    createPost(params,cb) {
        const postParams = params.postParams;
        const name = postParams.name;
        const post = postParams.post;
        var date = new Date();
        new db({
            Name: name,
            Post: post,
            date: date.toString().substr(0, 24)
        }).save(cb);

    }

    deletePost(params,cb){
        var date =params.id;
        db.findOneAndRemove({date:date}, cb);
    }

    addComment(params,cb) {
        const id = params.id;
        const comment = params.postParams && params.postParams.comment || "";
        var date    =   id;
        var comdate =   new Date().toString().substr(0,24);
        var query   =   {date: date};
        if(!comment==""){
            db.update(query,
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

    viewComments(params,cb) {
        var date =params.id;
        db.findOne({date:date}, cb);
    }
}

// returns an application wide static instance of homeAPI
function getHomeAPIInstance() {
    const home = new Home();
    return home;
}

exports.getHomeAPIInstance = getHomeAPIInstance;
