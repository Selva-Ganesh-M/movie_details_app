import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "./movie.er";
import { TRootState } from "../../store";
import { IMovie } from "../movie/movie.er";

type TMovieSliceInitialState = {
  movies: Array<IMovie>;
  isFetching: boolean;
  isError: boolean;
  error: string;
};

const initialState: TMovieSliceInitialState = {
  movies: [],
  isFetching: false,
  isError: false,
  error: "",
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        console.log(`fulfilled-${JSON.stringify(action.payload)}`);

        state.isFetching = false;
        state.movies = action.payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(getMovies.rejected, (state) => {
        state.isFetching = false;
        state.isError = true;
        state.error = "";
      });
  },
});

export default movieSlice;

// #region : selectors

export const selectAllMovies = (state: TRootState) => {
  return state.movies.movies;
};

// #endregion : selectors
