import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/api";

export const getMovies = createAsyncThunk(
  "movie/getMovies",
  (date, thunkApi) => {
    try {
      const data = api.get("/");
    } catch (error: unknown) {
      //
    }
  }
);
