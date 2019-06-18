/**
 * Created by Sai on 6/29/17.
 */
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