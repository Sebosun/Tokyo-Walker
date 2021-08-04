import React from "react";
import { useState } from "react";
import AudioContext from "./audio-context";

const AudioProvider = (props) => {
  const [audioState, setAudioState] = useState({
    name: "Toonorth Aftersome",
    url: "https://soundcloud.com/chillhopdotcom/toonorth-aftersome",
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const changeAudioHandler = (item) => {
    setAudioState(item);
  };
  const playAudioHandler = () => {
    setIsPlaying((prev) => !prev);
  };
  const changeVolumeHandler = (volume) => {
    console.log(volume);
    setVolume(volume);
  };

  const audioContext = {
    name: audioState.name,
    url: audioState.url,
    start: audioState.start,
    playing: isPlaying,
    setPlayStatus: playAudioHandler,
    changeAudio: changeAudioHandler,
    volume: volume,
    changeVolume: changeVolumeHandler,
  };
  return (
    <AudioContext.Provider value={audioContext}>
      {props.children}
    </AudioContext.Provider>
  );
};
export default AudioProvider;
