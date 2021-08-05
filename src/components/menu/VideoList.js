import videos from "../../data/videos.json";
import VideoContext from "../../store/video-context";
import classes from "./VideoList.module.css";

import { useContext, useState, useEffect } from "react";

const VideoList = () => {
  const [currentCountry, setCurrentCountry] = useState("japan");
  const [videosList, setVideosList] = useState([]);
  const videoCtx = useContext(VideoContext);

  const changeDisplay = (item) => {
    videoCtx.addVideo(item);
  };

  const changeCountry = (country) => {
    setCurrentCountry(country);
  };

  const videoCategoriesGen = () => {
    let content = [];
    for (let property in videos) {
      content.push(
        <div onClick={() => changeCountry(property)} key={property}>
          {property}
        </div>
      );
    }
    return content;
  };

  const list = videos[currentCountry].map((item) => {
    return (
      <li key={item.url}>
        <div role="button" onClick={() => changeDisplay(item)}>
          {item.name}
        </div>
      </li>
    );
  });
  return (
    <>
      <div className={classes.video}>
        <ul>{list}</ul>
      </div>
      {videoCategoriesGen()}
    </>
  );
};
export default VideoList;
