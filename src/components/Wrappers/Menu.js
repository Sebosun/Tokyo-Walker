import VideoList from "../menu/VideoList";
import { React, useContext } from "react";

import Button from "../ui/Button";
import VideoContext from "../../store/video-context";
import AudioContext from "../../store/audio-context";
import classes from "./Menu.module.css";

const Menu = () => {
  const videoCtx = useContext(VideoContext);
  const audioCtx = useContext(AudioContext);
  return (
    <div className={classes.menu}>
      <div className={classes.video}>
        <VideoList />
      </div>
      <Button onClick={videoCtx.changeMute}>
        {videoCtx.muted
          ? "Turn On The Street Noise"
          : "Turn Off The Street Noise"}
      </Button>
      <div className="music"></div>
      <Button onClick={audioCtx.setPlayStatus}>
        {`  ${audioCtx.playing ? "Stop music" : "Play music"} `}
      </Button>
    </div>
  );
};
export default Menu;
