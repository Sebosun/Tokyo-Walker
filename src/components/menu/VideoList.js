import Videos from "../../data/videos.json";
import VideoContext from "../../store/video-context";
import { useContext } from "react";
// import classes from "VideoList.module.css";

const VideoList = () => {
  const videoCtx = useContext(VideoContext);
  const changeDisplay = (item) => {
    videoCtx.addVideo(item);
  };
  const list = Videos.japan.map((item) => {
    return (
      <li>
        <div onClick={() => changeDisplay(item)}>{item.name}</div>
      </li>
    );
  });
  return (
    <div className="videoList">
      <ul>{list}</ul>
    </div>
  );
};
export default VideoList;
