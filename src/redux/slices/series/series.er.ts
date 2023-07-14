import { apiKey } from "./../../../config/envConfig";
import { ISeries } from "./series.slice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import ensureError from "../../../utils/ensureError";
import api, { TResponse } from "../../../config/api";
import { IResponse, IResponseError } from "../movie/movie.er";

export const getSeries = createAsyncThunk(
  "series/getSeries",
  async (data: { src: string; type: string; pageNo: number }, thunkApi) => {
    try {
      const res: TResponse<IResponse | IResponseError> = await api.get(
        `/?apiKey=${apiKey}&s=${data.src}&type=${data.type}&page=${data.pageNo}`
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
