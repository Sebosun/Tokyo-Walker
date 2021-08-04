import React, { useContext, useState } from "react";
import AudioContext from "../../store/audio-context";
import Button from "../ui/Button";
import classes from "./MusicMenu.module.css";
import music from "../../data/music.json";

const MusicMenu = (props) => {
  const audioCtx = useContext(AudioContext);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const selectRandom = () => {
    console.log(music.lofi.length);
    audioCtx.changeAudio(music.lofi[getRandomInt(7)]);
  };
  return (
    <div>
      <div style={{ fontSize: "10px" }} className={classes.musicNavigation}>
        {/* <Button>prev</Button> */}
        <div onClick={selectRandom} className={classes.name}>
          {audioCtx.name}
        </div>
        {<Button onClick={() => console.log(music.lofi.length)}>next</Button>}
      </div>
      {/* <a href={audioCtx.url}>Source link</a> */}
    </div>
  );
};

export default MusicMenu;
