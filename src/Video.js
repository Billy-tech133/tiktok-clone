import React, { useRef, useState } from "react";
import "./Video.css";
import download from "./video/download.mp4";
import VideoFooter from "./VideoFooter";
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
        src={download}
      ></video>
      <VideoFooter />
    </div>
  );
}

export default Video;
