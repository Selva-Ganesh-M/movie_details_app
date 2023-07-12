import { createAsyncThunk } from "@reduxjs/toolkit";
import api, { TResponse } from "../../../config/api";
import ensureError from "../../../utils/ensureError";
import { apiKey } from "../../../config/envConfig";

interface IMovieSrcData {
  src: string;
}

export interface IMovie {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface IResponse {
  Search: Array<IMovie>;
  totalResults: number;
  Response: "True";
}

interface IResponseError {
  Response: "False";
  Error: string;
}

export const getMovies = createAsyncThunk(
  "movie/getMovies",
  async (data: IMovieSrcData, thunkApi) => {
    try {
      const res: TResponse<IResponse | IResponseError> = await api.get(
        `?apikey=${apiKey}&s=${data.src}`
      );
      switch (res.data.Response) {
        case "True":
          return thunkApi.fulfillWithValue(res.data.Search);
        case "False":
          throw new Error(res.data.Error);
      }
    } catch (err: unknown) {
      const error = ensureError(err);
      throw thunkApi.rejectWithValue(error.message);
    }
  }
);
