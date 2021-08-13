import { configureStore } from "@reduxjs/toolkit";

import musicActions from "./audio-slice";

const store = configureStore({
  reducer: { audio: musicActions.reducer },
});

export default store;
