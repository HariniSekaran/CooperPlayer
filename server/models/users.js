// importing the libraries
const mongoose = require("mongoose")

// user schema
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        maxlength:100,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        maxlength:500,
        required:true
    },
    isPro:{
        type:Boolean
    },
    playlists : [
        {type: mongoose.Schema.Types.ObjectId,ref:'playlists'}
    ]
})

// exporting the schema
module.exports = mongoose.model("users",userSchema)