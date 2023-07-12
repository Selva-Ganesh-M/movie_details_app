import { createSlice } from "@reduxjs/toolkit";
import { getSeries } from "./series.er";
import { TRootState } from "../../store";

export interface ISeries {
  Search: Array<{
    Title: string;
    isFetching: false;
    isError: false;
    error: "";
  }>;
}

interface ISeriesInitialState {
  series: Array<ISeries>;
  isError: boolean;
  error: string;
  isFetching: boolean;
}

const initialState: ISeriesInitialState = {
  series: [],
  isError: false,
  error: "",
  isFetching: false,
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
        state.isError = false;
        state.isFetching = false;
        state.series = action.payload;
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
