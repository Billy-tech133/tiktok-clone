import { MusicNote } from "@material-ui/icons";
import React from "react";
import "./VideoFooter";
import Ticker from "react-ticker";
function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter-text">
        <h3>@billybrown</h3>
        <p>this is a description</p>
        <div className="videoFootewr">
          <MusicNote className="videoFooter-icon" />
          <Ticker mode="smooth">
            {({ index }) => {
              <>
                <p>YOOO whats up guys {index}</p>
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
