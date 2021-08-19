import React, { useState, useEffect } from "react";

import "./App.css";
import db from "./firebase";
import Video from "./Video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="app">
      <div className="app-videos">
        {videos.map(
          ({ url, description, channel, song, messages, likes, shares }) => {
            return (
              <Video
                url={url}
                channel={channel}
                description={description}
                song={song}
                messages={messages}
                likes={likes}
                shares={shares}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default App;
