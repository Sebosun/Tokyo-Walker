import { createSlice } from "@reduxjs/toolkit";
import music from "../../data/music.json";

const musicSlice = createSlice({
  name: "audio",
  initialState: {
    name: "Midnight walk",
    url: "https://soundcloud.com/jazzhopcafe/midnight-walk-lofi-jazzhop-chill-mix",
    playing: false,
    genre: "lofi",
    volume: 50,
  },
  reducers: {
    // equlas to playAudioHandler
    playMusic(state) {
      state.playing = !state.playing;
    },
    // equals to changeAudioHandler in the context version
    changeMusic(state, action) {
      console.log(action.payload.name, action.payload.url);
      state.name = action.payload.name;
      state.url = action.payload.url;
    },
    // equals to changeVolumeHandler in the context version
    changeVolume(state, action) {
      state.volume = action.payload;
    },
    // equals to changeGenre in the context version
    changeGenre(state, action) {
      state.genre = action.payload;
    },
  },
});

export const selectRandomSong = (genre = "lofi") => {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const genreLength = music[genre].length;
  const randomSong = music[genre][getRandomInt(genreLength)];

  return (dispatch) => {
    dispatch(musicSlice.actions.changeMusic(randomSong));
    dispatch(musicSlice.actions.changeGenre(genre));
  };
};

export const musicActions = musicSlice.actions;

export default musicSlice;
