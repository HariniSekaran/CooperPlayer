// importing the libraries
const mongoose = require("mongoose")

// songs schema
const songSchema = new mongoose.Schema({
    songName:{
        type:String,
        unique:true,
        required:true
    },
    duration:{
        type:String,
        maxlength:500,
        required:true
    }
})

// exporting the schema
module.exports = mongoose.model("songs",songSchema)