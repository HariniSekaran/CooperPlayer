const express = require('express');
const router = new express.Router;
const User = require('../controllers/usersController');
const Playlist = require('../controllers/playlistsController');
const Song = require('../controllers/songsController');
router.get('/',(req,res)=>res.send('ok'));
// user routes
router.post('/user/create',User.create);
router.get('/user/find',User.findAll);
router.get('/user/findByEmail/:email',User.findByEmail);
router.get('/user/find/playlist/:mailId', User.playlistsByUser);
router.post('/user/login', User.login);
// playlist routes
router.post('/playlist/create/:id', Playlist.create);
router.post('/playlist/addSong/:id',Playlist.addSong);
router.get('/playlist/populate/:id',Playlist.userByPlaylist);
// song routes
router.post('/song/create', Song.create);
router.get('/song/list', Song.findAllSongs);
module.exports = router;