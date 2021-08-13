import { configureStore } from "@reduxjs/toolkit";

import musicActions from "./audio-slice";
import videoActions from "./video-slice";

const store = configureStore({
  reducer: { audio: musicActions.reducer, video: videoActions.reducer },
});

export default store;
