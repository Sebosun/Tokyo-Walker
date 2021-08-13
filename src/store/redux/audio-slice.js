import { createSlice } from "@reduxjs/toolkit";

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
    playMusic(state) {
      state.playing = !state.playing;
    },
    // changeAudioHandler
    changeMusic(state, action) {
      state.name = action.payload.name;
      state.url = action.payload.url;
    },
    changeVolume(state, action) {
      state.volume = action.payload;
    },
  },
});

export const musicActions = musicSlice.actions;

export default musicSlice;
