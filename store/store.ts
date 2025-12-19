import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "./features/bannerSlice";
import movieReducer from "./features/movieSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      banner: bannerReducer,
      movie: movieReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        },
      }),
  });
};1

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

