import { MusicNote } from "@material-ui/icons";
import React from "react";
import "./VideoFooter.css";
import Ticker from "react-ticker";
function VideoFooter({ channel, description, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter-text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter-ticker">
          <MusicNote className="videoFooter-icon" />
          <Ticker mode="smooth">
            {({ index }) => {
              <>
                <p>{`${song}${index}`}</p>
              </>;
            }}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter-record"
        src="https://static.thenounproject.com/png/3640186-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
