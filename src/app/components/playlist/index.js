// components/Playlist.js
import s from "./playlist.module.scss";

function Playlist({ playlist }) {
  return (
    <div className={styles.playlist}>
      <h2>{playlist.name}</h2>
      <img
        src={playlist.images[0]?.url}
        alt={playlist.name}
        className={styles.playlistImage}
      />
      <p>{playlist.description}</p>
      <a
        href={playlist.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open in Spotify
      </a>
    </div>
  );
}

export default Playlist;
