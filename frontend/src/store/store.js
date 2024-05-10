import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { signupPost } from "../apis/service";

export const store = configureStore({
  reducer: {
    [signupPost.reducerPath]: signupPost.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(signupPost.middleware),
});

setupListeners(store.dispatch);
