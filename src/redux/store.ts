import { configureStore, combineReducers } from "@reduxjs/toolkit";
import movieSlice from "./slices/movie/movie.slice";
import seriesSlice from "./slices/series/series.slice";

const rootReducer = combineReducers({
  movies: movieSlice.reducer,
  series: seriesSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type TStoreDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;

export default store;
