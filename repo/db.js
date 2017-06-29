/**
 * Created by Sai on 6/29/17.
 */
var express = require('express');
var url = "mongodb://localhost:27017/MongoDatabase";
var mongoose = require('mongoose');
var Schema = require('Schema');
var dbSchema =new mongoose.Schema({
    Name    :   String,
    Post    :   String,
    date    :   String,
    comments:   [
        {   content     :   String,
            createdAt   :   String
        }
    ]
});
var db = mongoose.model("employees",dbSchema);

mongoose.connect(url);

module.exports = db;