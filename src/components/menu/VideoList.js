import Videos from "../../data/videos.json";
import VideoContext from "../../store/video-context";
import { useContext } from "react";

const VideoList = () => {
  const videoCtx = useContext(VideoContext);
  const changeDisplay = (item) => {
    videoCtx.addVideo(item);
  };
  const list = Videos.japan.map((item) => {
    return (
      <li key={item.url}>
        <div role="button" onClick={() => changeDisplay(item)}>
          {item.name}
        </div>
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
