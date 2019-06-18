const db = require('../repo/db');
let instance = null;

<<<<<<< HEAD
class Home {
    static async getAllElements() {
=======
class HomeAPI {
    async getAllElements() {
>>>>>>> 5ec137135399641820aac55d2aef582736476e24
        let result = await db.find({});
        return {users: result};
    }

<<<<<<< HEAD
    static async createPost(params) {
=======
    async createPost(params) {
>>>>>>> 5ec137135399641820aac55d2aef582736476e24
        const postParams = params.postParams;
        const {name, post} = postParams;
        const date = new Date();
        await new db({
            Name: name,
            Post: post,
            date: date.toString().substr(0, 24)
        }).save();
    }

<<<<<<< HEAD
    static async deletePost(params){
=======
    async deletePost(params){
>>>>>>> 5ec137135399641820aac55d2aef582736476e24
        let date =params.id;
        await db.findOneAndRemove({date:date});
    }

<<<<<<< HEAD
    static async addComment(params) {
=======
     async addComment(params) {
>>>>>>> 5ec137135399641820aac55d2aef582736476e24
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

<<<<<<< HEAD
    static async viewComments(params) {
=======
     async viewComments(params) {
>>>>>>> 5ec137135399641820aac55d2aef582736476e24
        const date = params.id;
        const data = await db.findOne({date:date});
        return {user:data};
    }

    static getInstance() {
        if(!instance)
<<<<<<< HEAD
            instance = new Home();
=======
            console.log("api added")
            instance = new HomeAPI();
>>>>>>> 5ec137135399641820aac55d2aef582736476e24
        return instance;
    }
}

<<<<<<< HEAD

exports.getInstance = Home.getInstance;
=======
exports.getInstance = HomeAPI.getInstance;
>>>>>>> 5ec137135399641820aac55d2aef582736476e24
