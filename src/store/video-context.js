import React from "react";

const VideoContext = React.createContext({
  name: "",
  url: "",
  start: "0",
});

export default VideoContext;
