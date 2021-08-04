import { React, useContext } from "react";

import VideoContext from "../../store/video-context";
import AudioContext from "../../store/audio-context";
import VideoList from "../menu/VideoList";
import MusicMenu from "../menu/MusicMenu";
import Github from "../Wrappers/Github";
import Buttons from "../Wrappers/Buttons";

import classes from "./Menu.module.css";

const Menu = () => {
  const videoCtx = useContext(VideoContext);
  const audioCtx = useContext(AudioContext);

  return (
    <div className={classes.menu}>
      <p className={classes.title}>Tokyo Walker</p>
      <VideoList />
      <Buttons
        changeMute={videoCtx.changeMute}
        muted={videoCtx.muted}
        setPlayStatus={audioCtx.setPlayStatus}
        playing={audioCtx.playing}
      />
      {/* TODO transform animation here */}
      {audioCtx.playing && <MusicMenu />}
      <Github />
    </div>
  );
};

export default Menu;
