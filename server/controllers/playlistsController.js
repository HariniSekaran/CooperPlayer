const Playlist = require('../models/playlists');
const User = require('../models/users');

module.exports = {
    create : async (req, res) => {

        console.log(req.params);
        const user = req.params;
        const id = user.id;
        const { playlistName } = req.body;
        const playlist = await Playlist.create({
            playlistName,
            user:id
        });
        await playlist.save();

        const userById = await User.findById(id);

        userById.playlists.push(playlist);
        await userById.save();

        return res.send(userById);
    },

    userByPlaylist : async (req,res) => {
        const { id } = req.params;
        const userByPost = await Playlist.findById(id).populate('user');
        res.send(userByPost);
    },

    addSong : async (req, res) => {
        const { id } = req.params;
        const { _id } = req.body;
        console.log(id, _id);


        const song = await Playlist.updateOne(
            { _id: id },
            { $addToSet: { songs: _id} }
        );
        return res.send("Song added to playlist");
    }
}