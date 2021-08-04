import React, { useContext, useState } from "react";
import AudioContext from "../../store/audio-context";
import Button from "../ui/Button";
import classes from "./MusicMenu.module.css";
import music from "../../data/music.json";

const MusicMenu = (props) => {
  const audioCtx = useContext(AudioContext);

  const selectRandom = (item) => {
    console.log(item);
  };
  return (
    <div>
      <div style={{ fontSize: "10px" }} className={classes.musicNavigation}>
        <Button>prev</Button>
        <div className={classes.name}>{audioCtx.name}</div>
        <Button>next</Button>
      </div>
      {/* <a href="">Source link</a> */}
    </div>
  );
};

export default MusicMenu;
