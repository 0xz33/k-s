// pages/index.js

import { useEffect, useState } from "react";
import Playlist from "../playlist";

const Records = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchTest = async () => {
      const res = await fetch("/api/test");
      const data = await res.json();
      console.log("Test response:", data);
    };

    fetchTest();
  }, []);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const res = await fetch("/api/spotify");
      const data = await res.json();
      setPlaylists(data.playlists);
    };

    fetchPlaylists();
  }, []);

  return (
    <div>
      <h1>Spotify Playlists</h1>

      {playlists.map((playlist, index) => (
        <Playlist key={index} playlist={playlist} />
      ))}
    </div>
  );
};
export default Records;
