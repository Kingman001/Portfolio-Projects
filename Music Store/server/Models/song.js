const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  album: String,
  url: String, // URL to audio file (placeholder for streaming)
});

module.exports = mongoose.model('Song', songSchema);