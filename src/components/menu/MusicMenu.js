import React, { useContext } from "react";
import AudioContext from "../../store/audio-context";
import VolumeControl from "../ui/VolumeControl";
import classes from "./MusicMenu.module.css";
import music from "../../data/music.json";

const MusicMenu = () => {
  const audioCtx = useContext(AudioContext);

  const onVolumeChange = (e) => {
    audioCtx.changeVolume(e.target.value);
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const selectRandom = () => {
    const lofiLenght = music.lofi.length;
    audioCtx.changeAudio(music.lofi[getRandomInt(lofiLenght)]);
  };

  return (
    <div>
      <div style={{ fontSize: "10px" }} className={classes.musicNavigation}>
        <div onClick={selectRandom} className={classes.name}>
          {audioCtx.name}
        </div>
      </div>
      <VolumeControl onVolumeChange={onVolumeChange} volume={audioCtx.volume} />
    </div>
  );
};

export default MusicMenu;
