import React, { useRef, useState } from "react";
import "./Video.css";
import download from "./video/download.mp4";
function Video() {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video-player"
        onClick={onVideoPress}
        ref={videoRef}
        loop
        controls
        src={download}
      ></video>
    </div>
  );
}

export default Video;
