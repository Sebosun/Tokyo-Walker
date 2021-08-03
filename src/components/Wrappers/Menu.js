import VideoList from "../menu/VideoList";
import { React, useContext } from "react";

import Button from "../ui/Button";
import VideoContext from "../../store/video-context";

const Menu = () => {
  const videoCtx = useContext(VideoContext);
  return (
    <>
      <div className="video">
        <VideoList />
        <Button onClick={videoCtx.changeMute}>Turn street noise</Button>
      </div>
      <div className="music"></div>
    </>
  );
};
export default Menu;
