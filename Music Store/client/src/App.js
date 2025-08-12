import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

function App() {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    // Fetch songs from the API
    axios.get('http://localhost:5000/api/songs')
      .then(response => setSongs(response.data))
      .catch(error => console.error('Error fetching songs:', error));
  }, []);

  const playSong = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="app">
      <h1>Spotify Clone</h1>
      <div className="song-list">
        {songs.map(song => (
          <div key={song._id} className="song" onClick={() => playSong(song)}>
            <h3>{song.title}</h3>
            <p>{song.artist} - {song.album}</p>
          </div>
        ))}
      </div>
      {currentSong && (
        <div className="player">
          <h2>Now Playing: {currentSong.title}</h2>
          <audio controls autoPlay src={currentSong.url}></audio>
        </div>
      )}
    </div>
  );
}

export default App;