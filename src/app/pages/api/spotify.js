// pages/api/spotify.js

import axios from "axios";

export default async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    try {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`,
          },
        }
      );

      res.status(200).json({ playlists: response.data.items });
    } catch (error) {
      res.status(500).json({ error: "Unable to fetch playlists" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};
