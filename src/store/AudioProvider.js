import React from "react";
import { useState } from "react";
import AudioContext from "./audio-context";

const AudioProvider = (props) => {
  const [audioState, setAudioState] = useState({
    name: "Toonorth Aftersome",
    url: "https://soundcloud.com/user-405263843/arakawa-under-the-bridge-op-full-ver-etsuko-yakushimaru-venus-to-jesus",
  });
  // url: "https://soundcloud.com/chillhopdotcom/toonorth-aftersome",
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [genre, setGenre] = useState("lofi");

  const changeAudioHandler = (item) => {
    setAudioState(item);
  };
  const playAudioHandler = () => {
    setIsPlaying((prev) => !prev);
  };
  const changeVolumeHandler = (volume) => {
    setVolume(volume);
  };
  const changeGenre = (genre) => {
    setGenre(genre);
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

    genre: genre,
    changeGenre: changeGenre,
  };
  return (
    <AudioContext.Provider value={audioContext}>
      {props.children}
    </AudioContext.Provider>
  );
};
export default AudioProvider;
