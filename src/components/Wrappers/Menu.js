import VideoList from "../menu/VideoList";
import { React, useContext } from "react";

import Button from "../ui/Button";
import VideoContext from "../../store/video-context";
import AudioContext from "../../store/audio-context";

const Menu = () => {
  const videoCtx = useContext(VideoContext);
  const audioCtx = useContext(AudioContext);
  return (
    <>
      <div className="video">
        <VideoList />
        <Button onClick={videoCtx.changeMute}>Turn street noise</Button>
      </div>
      <div className="music">
        <Button onClick={audioCtx.setPlayStatus}>
          {`  ${audioCtx.playing ? "Stop music" : "Play music"} `}
        </Button>
      </div>
    </>
  );
};
export default Menu;
