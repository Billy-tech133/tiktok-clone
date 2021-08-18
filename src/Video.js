import React, { useRef, useState } from "react";
import "./Video.css";
import download from "./video/download.mp4";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
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
        loop
        ref={videoRef}
        src={download}
      ></video>
      <VideoFooter
        channel="billybrown"
        description="check out this song"
        song="mr leo"
      />
      <VideoSidebar likes={111} shares={222} messages={333} />
    </div>
  );
}

export default Video;
