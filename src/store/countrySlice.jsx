import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const listCountries = createAsyncThunk(
  "country/fetchCountry",
  async (country) => {
    const getList = fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then((res) => res.json())
      .then((result) => result);

    return getList;
  }
);

export const countrySlice = createSlice({
  name: "country",
  initialState: {
    country: [],
    flag: false,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listCountries.pending, (state) => {
        state.status = "pending";
      })
      .addCase(listCountries.fulfilled, (state, action) => {
        state.status = "succeeded";
        const countryData = action.payload;
        state.country = countryData[0];
        state.flag = true;
      })
      .addCase(listCountries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default countrySlice.reducer;
