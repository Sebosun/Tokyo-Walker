import React from "react";
import { useReducer } from "react";
import VideoContext from "./video-context";

const defaultVideoState = {
  name: "Shibuya Walking",
  url: "0nTO4zSEpOs",
  start: "0",
};

const videoReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return {
      name: action.name,
      url: action.url,
      start: action.start,
    };
  }
  return defaultVideoState;
};

const CartProvider = (props) => {
  const [videoState, dispatchVideoAction] = useReducer(
    videoReducer,
    defaultVideoState
  );

  const changeVideoHandler = (item) => {
    dispatchVideoAction({ type: "CHANGE", item: item });
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
