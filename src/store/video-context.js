import React from "react";

const VideoContext = React.createContext({
  name: "",
  url: "",
  start: "",
  muted: "",
});

export default VideoContext;
