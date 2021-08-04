import React, { useContext } from "react";
import AudioContext from "../../store/audio-context";
import VolumeControl from "../ui/VolumeControl";
import classes from "./MusicMenu.module.css";
import music from "../../data/music.json";
import Card from "../ui/Card";

const MusicMenu = () => {
  const audioCtx = useContext(AudioContext);

  const onVolumeChange = (e) => {
    audioCtx.changeVolume(e.target.value);
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const selectRandom = (property) => {
    console.log(property);
    const lofiLenght = music[property].length;
    audioCtx.changeAudio(music[property][getRandomInt(lofiLenght)]);
  };

  const musicTypesGen = () => {
    let content = [];
    for (let property in music) {
      console.log(property);
      content.push(
        <Card onClick={() => selectRandom(property)} key={property}>
          {property}
        </Card>
      );
    }
    return content;
  };

  return (
    <div>
      <div className={classes.musicNavigation}>
        <div role="button" onClick={selectRandom} className={classes.name}>
          {audioCtx.name}
        </div>
      </div>
      <VolumeControl onVolumeChange={onVolumeChange} volume={audioCtx.volume} />
      <p className={classes.type}>Select music genre</p>
      <div className={classes.wrapper}>{musicTypesGen()}</div>
    </div>
  );
};

export default MusicMenu;
