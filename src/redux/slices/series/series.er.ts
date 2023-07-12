import { apiKey } from "./../../../config/envConfig";
import { ISeries } from "./series.slice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import ensureError from "../../../utils/ensureError";
import api, { TResponse } from "../../../config/api";

interface ISeriesSuccessResponse {
  Response: "True";
  Search: Array<ISeries>;
  totalResults: number;
}

interface ISeriesFailedResponse {
  Response: "False";
  Error: string;
}

export const getSeries = createAsyncThunk(
  "series/getSeries",
  async (data: { src: string }, thunkApi) => {
    try {
      const res: TResponse<ISeriesFailedResponse | ISeriesSuccessResponse> =
        await api.get(`/?apiKey=${apiKey}&s=${data.src}&type=series`);

      switch (res.data.Response) {
        case "True":
          return thunkApi.fulfillWithValue(res.data.Search);
        case "False":
          throw thunkApi.rejectWithValue(res.data.Error);
      }
    } catch (err: unknown) {
      const error = ensureError(err);
      throw thunkApi.rejectWithValue(error.message);
    }
  }
);
