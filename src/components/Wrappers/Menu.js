import { React, useContext } from "react";

import VideoContext from "../../store/video-context";
import MusicContext from "../../store/music-context";
import VideoList from "../menu/VideoList";
import MusicMenu from "../menu/MusicMenu";
import Github from "../Wrappers/Github";
import Buttons from "../Wrappers/Buttons";

import classes from "./Menu.module.css";
import Sources from "./Sources";
import { useDispatch, useSelector } from "react-redux";
import { musicActions } from "../../store/redux/audio-slice";

const Menu = () => {
  const videoCtx = useContext(VideoContext);
  const musicCtx = useContext(MusicContext);

  const playingRdx = useSelector((state) => state.audio.playing);
  const dispatch = useDispatch();

  const changeAudioHandler = () => {
    dispatch(musicActions.playMusic());
  };

  return (
    <div className={classes.menu}>
      <p className={classes.title}>Tokyo Walker</p>
      <VideoList />
      <Buttons
        changeMute={videoCtx.changeMute}
        muted={videoCtx.muted}
        setPlayStatus={changeAudioHandler}
        playing={playingRdx}
      />
      {playingRdx && <MusicMenu />}

      <Sources
        className={classes.sources}
        musicUrl={musicCtx.url}
        videoUrl={videoCtx.url}
      />
      <Github />
    </div>
  );
};

export default Menu;
