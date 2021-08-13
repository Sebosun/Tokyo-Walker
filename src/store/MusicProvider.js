import React from "react";
import { useState } from "react";
import MusicContext from "./music-context";
import music from "../data/music.json";

const AudioProvider = (props) => {
  const [audioState, setAudioState] = useState({
    name: "Midnight walk",
    url: "https://soundcloud.com/jazzhopcafe/midnight-walk-lofi-jazzhop-chill-mix",
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
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

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  //default value
  const selectRandom = (selectedGenre = genre) => {
    const genreLength = music[selectedGenre].length;
    changeAudioHandler(music[selectedGenre][getRandomInt(genreLength)]);
    changeGenre(selectedGenre);
  };

  const audioContext = {
    name: audioState.name,
    url: audioState.url,
    playing: isPlaying,

    setPlayStatus: playAudioHandler,
    changeAudio: changeAudioHandler,

    volume: volume,
    changeVolume: changeVolumeHandler,

    genre: genre,
    changeGenre: changeGenre,

    selectRandom: selectRandom,
  };
  return (
    <MusicContext.Provider value={audioContext}>
      {props.children}
    </MusicContext.Provider>
  );
};
export default AudioProvider;
