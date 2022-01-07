const User = require('../models/users');
const bcrypt = require('bcrypt');
const { sign } = require("jsonwebtoken");

module.exports = {
    create : async (req, res) =>{
        const { userName, email, password, isPro } = req.body;
        
        await bcrypt.hash(password, 10).then((hash) => {
            let password = hash;
            const user = User.create({
                userName,
                email,
                password,
                isPro
            });
        return res.send(user);
        })
    },

    findAll : async (req, res) => {
        const user = await User.find();
        if(user.length === 0)
            return res.send("No users");
        else
            return res.send(user);
    },

    findByEmail : async (req, res) => {
        const user = await User.find({"email":req.params})
        if(user.length === 0)
            return res.send("No user with that");
        else
            return res.send(user);
    },

    login : async (req, res) => {
        //console.log("func called");
        const {email, password} = req.body;   
        const user = await User.find({"email":email});
        //console.log(email, user, password);
        if(user.length !== 0) {
          await bcrypt.compare(password, user[0].password).then((matched) => {
            if(matched) {
              console.log("Logged in!");
              const accessToken = sign({
                    userName: user.userName,
                    email: user.email,
                  }, "secretkey123");  
              return res.json({token:accessToken, userName: user[0].userName, email: user[0].email});
                }      
            else {
                return res.json({error : "Incorrect Password"});
                }
              });
        }
        else {
            return res.json({
              error: "Some error has occured! Try again later"
            });
        }
        return; 
    },

    
    playlistsByUser : async (req, res) => {
       const { mailId } = req.params;
       console.log(mailId);
       const user = await User.find({"email":mailId}).populate('playlists');
        console.log(user);
        res.send(user[0].playlists);
    }
}