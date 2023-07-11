import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "./movie.er";
import { TRootState } from "../../store";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    isFetching: false,
    isError: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state, action) => {
      // aksldjfl
    });
  },
});

export default movieSlice;
