import { React, useContext } from "react";

import VideoContext from "../../store/video-context";
import AudioContext from "../../store/audio-context";
import VideoList from "../menu/VideoList";
import MusicMenu from "../menu/MusicMenu";
import Button from "../ui/Button";
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
      <div className="music">
        <MusicMenu />
      </div>
      <Button onClick={audioCtx.setPlayStatus}>
        {`  ${audioCtx.playing ? "Stop music" : "Play music"} `}
      </Button>
    </div>
  );
};
export default Menu;
