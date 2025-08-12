const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

// Get all songs
router.get('/', async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new song (for testing)
router.post('/', async (req, res) => {
  const song = new Song({
    title: req.body.title,
    artist: req.body.artist,
    album: req.body.album,
    url: req.body.url,
  });
  try {
    const newSong = await song.save();
    res.status(201).json(newSong);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;