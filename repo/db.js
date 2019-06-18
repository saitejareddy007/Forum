/**
 * Created by Sai on 6/29/17.
 */

var url = "mongodb://localhost:27017/MongoDatabase";
var mongoose = require('mongoose');

var accountSchema   =   new mongoose.Schema({
    Name        :   String,
    Email       :   String,
    Password    :   String
});
var ItemSchema = new mongoose.Schema(
    { img:
        { data: Buffer, contentType: String }
    }
);
var item = mongoose.model("Avathar",ItemSchema);

var postSchema      =   new mongoose.Schema({
    idOfPost    :   String,
    Name        :   String,
    Post        :   String,
    date        :   String,
    comments    :   [
                        {
                            content: String,
                            createdAt: String
                        }
                    ]
});

var dbOfPosts       =   mongoose.model("Posts",postSchema);

var dbOfAccounts    =   mongoose.model("Users",accountSchema);

var db={dbOfPosts,dbOfAccounts,item};
const url = "mongodb://localhost:27017/MongoDatabase";
let mongoose = require('mongoose');
let dbSchema = new mongoose.Schema({
    Name: String,
    Post: String,
    date: String,
    comments: [
        {
            content: String,
            createdAt: String
        }
    ]
});

let db = mongoose.model("employees", dbSchema);
const connection = mongoose.connect(url,{ useNewUrlParser: true });

module.exports = db;