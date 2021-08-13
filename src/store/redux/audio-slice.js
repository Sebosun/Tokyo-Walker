import { createSlice } from "@reduxjs/toolkit";
import music from "../../data/music.json";

const musicSlice = createSlice({
  name: "audio",
  initialState: {
    name: "Gf is a witch",
    url: "https://www.youtube.com/watch?v=a-BgREkkjcg",
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

// since random int is a side effect im doing a custom reducer
export const selectRandomSong = (genre) => {
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
