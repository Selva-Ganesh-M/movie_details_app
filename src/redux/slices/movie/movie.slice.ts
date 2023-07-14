import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "./movie.er";
import { TRootState } from "../../store";
import { IMovie } from "../movie/movie.er";

type TMovieSliceInitialState = {
  movies: Array<IMovie>;
  totalResults: number;
  isFetching: boolean;
  isError: boolean;
  error: string;
};

const initialState: TMovieSliceInitialState = {
  movies: [],
  totalResults: 0,
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
        state.movies = action.payload.data;
        state.isFetching = false;
        state.totalResults = action.payload.totalResults;
        state.isError = false;
        state.error = "";
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.error = action.payload as string;
      });
  },
});

export default movieSlice;

// #region : selectors

export const selectAllMovies = (state: TRootState) => {
  return state.movies.movies;
};

// #endregion : selectors
