import { React } from "react";

import VideoList from "../menu/VideoMenu";
import MusicMenu from "../menu/MusicMenu";
import Github from "../Wrappers/Github";
import Buttons from "../Wrappers/Buttons";

import classes from "./Menu.module.css";
import Sources from "./Sources";
import { useDispatch, useSelector } from "react-redux";
import { musicActions } from "../../store/redux/audio-slice";
import { videoActions } from "../../store/redux/video-slice";

const Menu = () => {
  const dispatch = useDispatch();

  const isPlaying = useSelector((state) => state.audio.playing);
  const musicUrl = useSelector((state) => state.audio.url);

  const isMuted = useSelector((state) => state.video.muted);
  const videoUrl = useSelector((state) => state.video.url);

  const changeAudioHandler = () => {
    dispatch(musicActions.playMusic());
  };

  const changeMuteHandler = () => {
    dispatch(videoActions.changeMute());
  };

  return (
    <div className={classes.menu}>
      <p className={classes.title}>Tokyo Walker</p>
      <VideoList />
      <Buttons
        changeMute={changeMuteHandler}
        muted={isMuted}
        setPlayStatus={changeAudioHandler}
        playing={isPlaying}
      />
      {isPlaying && <MusicMenu />}

      <Sources
        className={classes.sources}
        musicUrl={musicUrl}
        videoUrl={videoUrl}
      />
      <Github />
    </div>
  );
};

export default Menu;
