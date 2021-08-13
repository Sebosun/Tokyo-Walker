import { createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice({
  name: "audio",
  initialState: {
    name: "Midnight walk",
    url: "https://soundcloud.com/jazzhopcafe/midnight-walk-lofi-jazzhop-chill-mix",
    playing: false,
    genre: "lofi",
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
  },
});

export const musicActions = musicSlice.actions;

export default musicSlice;
