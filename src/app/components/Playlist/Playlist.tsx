import React, { useState } from 'react';
import styles from './Playlist.module.css';

type Song = {
  id: number;
  artist: string;
  title: string;
};

function Playlist() {
  const [data, setData] = useState<Song[]>([]);

  async function getPlaylist() {
    const response = await fetch('https://json-server.machens.dev/songs', {});
    const results = await response.json();
    setData(results);
    console.log({ data });
  }

  const songList = data.map((song) => (
    <li key={song.id}>
      {song.artist} - {song.title}
    </li>
  ));

  return (
    <div className={styles.welcome}>
      <button className={styles.button} onClick={getPlaylist}>
        show playlist
      </button>
      {data.length === 0 ? null : (
        <ul className={styles.playlist}>{songList}</ul>
      )}
    </div>
  );
}

export default Playlist;
