import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showError: false,
  errorMessage: "",
};

const portfolio = createSlice({
  name: "Error Message",
  initialState,
  reducers: {
    setShowError: (state, action) => void (state.showError = action.payload),
    setErrorMessage: (state, action) =>
      void (state.errorMessage = action.payload),
  },
});

export const { setShowError, setErrorMessage } = portfolio.actions;

export default portfolio.reducer;
