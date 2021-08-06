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

  const musicTypesGen = () => {
    let content = [];
    for (let genre in music) {
      content.push(
        <Card onClick={() => audioCtx.selectRandom(genre)} key={genre}>
          {genre}
        </Card>
      );
    }
    return content;
  };

  return (
    <div>
      <Card className={classes.name}>{audioCtx.name}</Card>
      <VolumeControl onVolumeChange={onVolumeChange} volume={audioCtx.volume} />
      <p className={classes.type}>select music genre:</p>
      <div className={classes.wrapper}>{musicTypesGen()}</div>
    </div>
  );
};

export default MusicMenu;
