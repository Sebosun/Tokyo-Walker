import React from "react";
import { useState } from "react";
import VideoContext from "./video-context";
import videos from "../data/videos.json";

const VideoProvider = (props) => {
  const [videoState, setVideoState] = useState({
    name: "Imperial Palace Cherry Blossoms",
    url: "JOqqR5TcL-I",
    start: "924",
  });
  const [isMuted, setIsMuted] = useState(true);
  const [country, setCountry] = useState("japan");

  const changeVideoHandler = (item) => {
    setVideoState(item);
  };
  const muteHandler = () => {
    setIsMuted((prev) => !prev);
  };
  const changeCountry = (country) => {
    setCountry(country);
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const selectRandom = () => {
    const countryLength = videos[country].length;
    changeVideoHandler(videos[country][getRandomInt(countryLength)]);
  };

  const videoContext = {
    name: videoState.name,
    url: videoState.url,
    start: videoState.start,
    muted: isMuted,
    addVideo: changeVideoHandler,
    changeMute: muteHandler,
    country: country,
    changeCountry: changeCountry,
    selectRandom: selectRandom,
  };

  return (
    <VideoContext.Provider value={videoContext}>
      {props.children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
