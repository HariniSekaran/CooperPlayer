// const Playlist = require('../models/playlists');
const Song = require('../models/songs');

module.exports = {
    create : async (req, res) => {

        const { songName, duration } = req.body;
        const song = await Song.create({
            songName,
            duration
        });
        await song.save();

        return res.send(song);
    },

    findAllSongs : async (req,res) => {
        const songs = await Song.find();
        res.send(songs);
    }
}