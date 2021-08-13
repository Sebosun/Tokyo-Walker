import { createSlice } from "@reduxjs/toolkit";
import videos from "../../data/videos.json";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    name: "Imperial Palace Cherry Blossoms",
    url: "JOqqR5TcL-I",
    start: "924",
    muted: true,
    country: "japan",
  },
  reducers: {
    changeVideo(state, action) {
      state.name = action.payload.name;
      state.url = action.payload.url;
    },
    changeMute(state) {
      state.muted = !state.muted;
    },
    changeCountry(state, action) {
      state.country = action.payload;
    },
  },
});

// since its random, it's a side effect so doing it here
export const selectRandomVideo = (country) => {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const countryLength = videos[country].length;
  const randomVideo = videos[country][getRandomInt(countryLength)];

  return (dispatch) => {
    dispatch(videoSlice.actions.changeVideo(randomVideo));
  };
};

export const videoActions = videoSlice.actions;

export default videoSlice;
