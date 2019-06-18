const db = require('../repo/db');
let instance = null;

class Home {
    static async getAllElements() {
        let result = await db.find({});
        return {users: result};
    }

    static async createPost(params) {
        const postParams = params.postParams;
        const {name, post} = postParams;
        const date = new Date();
        await new db({
            Name: name,
            Post: post,
            date: date.toString().substr(0, 24)
        }).save();
    }

    static async deletePost(params){
        let date =params.id;
        await db.findOneAndRemove({date:date});
    }

    static async addComment(params) {
        const {id:date} = params;
        const {comment} = params.postParams || "";
        const dateStr = new Date().toString().substr(0, 24);
        const query = {date: date};
        if(!comment===""){
            await db.update(query,
                {
                    $push: {
                        comments: {
                            "content": comment,
                            "createdAt": dateStr
                        }
                    }
                }
            );
        }
    }

    static async viewComments(params) {
        const date = params.id;
        const data = await db.findOne({date:date});
        return {user:data};
    }

    static getInstance() {
        if(!instance)
            instance = new Home();
        return instance;
    }
}


exports.getInstance = Home.getInstance;
