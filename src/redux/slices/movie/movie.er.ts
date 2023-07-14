import { createAsyncThunk } from "@reduxjs/toolkit";
import api, { TResponse } from "../../../config/api";
import ensureError from "../../../utils/ensureError";
import { apiKey } from "../../../config/envConfig";

interface IMovieSrcData {
  src: string;
  type: string;
  pageNo: number;
}

export interface IMovie {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IResponse {
  Search: Array<IMovie>;
  totalResults: number;
  Response: "True";
}

export interface IResponseError {
  Response: "False";
  Error: string;
}

export const getMovies = createAsyncThunk(
  "movie/getMovies",
  async (data: IMovieSrcData, thunkApi) => {
    try {
      const res: TResponse<IResponse | IResponseError> = await api.get(
        `?apikey=${apiKey}&s=${data.src}&type=${data.type}&page=${data.pageNo}`
      );
      switch (res.data.Response) {
        case "True":
          return thunkApi.fulfillWithValue({
            data: res.data.Search,
            totalResults: res.data.totalResults,
          });
        case "False":
          throw new Error(res.data.Error + ` Please try other words.`);
      }
    } catch (err: unknown) {
      const error = ensureError(err);
      throw thunkApi.rejectWithValue(error.message);
    }
  }
);
