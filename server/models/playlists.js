// importing the libraries
const mongoose = require("mongoose")

// playlist schema
const playlistSchema = new mongoose.Schema({

    playlistName:{
        type:String,
        maxlength:100,
        required:true,
        unique:true,
        trim:true
    },
    songs:[
        {type:mongoose.Schema.Types.ObjectId,ref:'songs'}
    ],
    user:{
        type:mongoose.Schema.Types.ObjectId,ref:'users'
    }
})

// exporting the schema
module.exports = mongoose.model("playlists",playlistSchema)