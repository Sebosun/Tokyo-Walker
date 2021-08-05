import videos from "../../data/videos.json";
import VideoContext from "../../store/video-context";
import classes from "./VideoList.module.css";
import { BiArrowBack } from "react-icons/bi";

import { useContext, useState } from "react";

const VideoList = () => {
  const [displayCountry, setDisplayCountry] = useState(true);
  const videoCtx = useContext(VideoContext);

  const changeDisplay = (item) => {
    videoCtx.addVideo(item);
  };

  const changeCountry = (country) => {
    videoCtx.changeCountry(country);
    setListDisplayType();
  };

  const setListDisplayType = () => {
    setDisplayCountry((prev) => !prev);
  };

  // for each key in video.json maps out a list item, which if clicked reveals list menu
  const videoCategoriesGen = () => {
    let content = [];
    for (let property in videos) {
      content.push(
        <li onClick={() => changeCountry(property)} key={property}>
          {`> `}
          {property}
        </li>
      );
    }
    return content;
  };

  //maps out a list of videos from the state of current country
  const list = videos[videoCtx.country].map((item) => {
    return (
      <li
        className={videoCtx.name === item.name ? classes.bold : null}
        key={item.url}
        onClick={() => changeDisplay(item)}
        role="button"
      >
        {item.name}
      </li>
    );
  });

  return (
    <div className={classes.videoList}>
      <ul>
        {displayCountry ? (
          videoCategoriesGen()
        ) : (
          <>
            <BiArrowBack
              role="button"
              onClick={setListDisplayType}
              className={classes.icon}
            />
            {list}
          </>
        )}
      </ul>
    </div>
  );
};
export default VideoList;
