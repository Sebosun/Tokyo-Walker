import React from "react";
import { useState } from "react";
import VideoContext from "./video-context";

const CartProvider = (props) => {
  const [videoState, setVideoState] = useState({
    name: "Shibuya Walking",
    url: "0nTO4zSEpOs",
    start: "0",
  });

  const changeVideoHandler = (item) => {
    setVideoState(item);
  };

  const cartContext = {
    name: videoState.name,
    url: videoState.url,
    start: videoState.start,
    addVideo: changeVideoHandler,
  };

  return (
    <VideoContext.Provider value={cartContext}>
      {props.children}
    </VideoContext.Provider>
  );
};

export default CartProvider;
