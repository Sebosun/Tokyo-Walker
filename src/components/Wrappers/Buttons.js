import React from "react";
import Button from "../ui/Button";
import classes from "./Buttons.module.css";

const Buttons = (props) => {
  return (
    <div className={classes.buttons}>
      <Button onClick={props.changeMute}>
        {props.muted ? "Turn On The Street Noise" : "Turn Off The Street Noise"}
      </Button>
      <Button onClick={props.setPlayStatus}>
        {`  ${props.playing ? "Stop music" : "Play music"} `}
      </Button>
    </div>
  );
};

export default Buttons;
