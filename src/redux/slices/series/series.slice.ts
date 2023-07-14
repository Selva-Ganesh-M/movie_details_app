import { createSlice } from "@reduxjs/toolkit";
import { getSeries } from "./series.er";
import { TRootState } from "../../store";

export interface ISeries {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface ISeriesInitialState {
  series: Array<ISeries>;
  totalResults: number;
  isFetching: boolean;
  isError: boolean;
  error: string;
}

const initialState: ISeriesInitialState = {
  series: [],
  totalResults: 0,
  isFetching: false,
  isError: false,
  error: "",
};

const seriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSeries.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getSeries.fulfilled, (state, action) => {
        state.series = action.payload.data;
        state.isFetching = false;
        state.totalResults = action.payload.totalResults;
        state.isError = false;
        state.error = "";
      })
      .addCase(getSeries.rejected, (state, action) => {
        state.isError = true;
        state.isFetching = false;
        state.error = action.payload as string;
      });
  },
});

export default seriesSlice;

// #region : selectors

export const selectAllSeries = (state: TRootState) => state.series.series;

// #endregion : selectors
