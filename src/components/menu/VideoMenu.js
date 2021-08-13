import videos from "../../data/videos.json";
import classes from "./VideoMenu.module.css";
import { BiArrowBack } from "react-icons/bi";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { videoActions } from "../../store/redux/video-slice";

const VideoList = () => {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.video.name);
  const country = useSelector((state) => state.video.country);

  const [displayCountrySelector, setDisplayCountrySelector] = useState(true);

  const videoChangeHandler = (item) => {
    dispatch(videoActions.changeVideo(item));
  };

  const countryChangeHandler = (country) => {
    dispatch(videoActions.changeCountry(country));
    displayCountrySelectionHandler();
  };

  const displayCountrySelectionHandler = () => {
    setDisplayCountrySelector((prev) => !prev);
  };

  // for each key in video.json maps out a list item, which if clicked reveals list menu
  const videoCategoriesGen = () => {
    let content = [];
    for (let property in videos) {
      content.push(
        <li
          onClick={() => countryChangeHandler(property)}
          key={property}
          role="button"
        >
          {`> `}
          {property}
        </li>
      );
    }
    return content;
  };

  //maps out a list of videos from the state of current country
  const list = videos[country].map((item) => {
    return (
      <li
        className={name === item.name ? classes.bold : null}
        key={item.url}
        onClick={() => videoChangeHandler(item)}
        role="button"
      >
        {item.name}
      </li>
    );
  });

  return (
    <div className={classes.videoList}>
      <ul>
        {displayCountrySelector ? (
          videoCategoriesGen()
        ) : (
          <>
            <BiArrowBack
              onClick={displayCountrySelectionHandler}
              className={classes.icon}
              role="button"
            />
            {list}
          </>
        )}
      </ul>
    </div>
  );
};
export default VideoList;
