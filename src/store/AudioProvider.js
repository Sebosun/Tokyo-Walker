import React from "react";
import { useState } from "react";
import AudioContext from "./audio-context";

const AudioProvider = (props) => {
  const [audioState, setAudioState] = useState({
    name: "Toonorth Aftersome",
    url: "https://soundcloud.com/chillhopdotcom/toonorth-aftersome",
  });
  const [isPlaying, setIsPlaying] = useState(false);

  const changeAudioHandler = (item) => {
    setAudioState(item);
  };
  const playAudioHandler = () => {
    setIsPlaying((prev) => !prev);
  };

  const audioContext = {
    name: audioState.name,
    url: audioState.url,
    start: audioState.start,
    addAudio: changeAudioHandler,
    playing: isPlaying,
    setPlayStatus: playAudioHandler,
  };
  return (
    <AudioContext.Provider value={audioContext}>
      {props.children}
    </AudioContext.Provider>
  );
};
export default AudioProvider;
