import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAll: false,
  showOne: false,
  oneCharacter: {},
  allCharacters: {},
};

const portfolio = createSlice({
  name: "Characters",
  initialState,
  reducers: {
    setShowAll: (state, action) => void (state.showAll = action.payload),
    setShowOne: (state, action) => void (state.showOne = action.payload),
    setOneCharacter: (state, action) =>
      void (state.chosenCharacter = action.payload),
    setAllCharacters: (state, action) =>
      void (state.allCharacters = action.payload),
  },
});

export const {
  setShowAll,
  setShowOne,
  setOneCharacter,
  setAllCharacters,
} = portfolio.actions;

export default portfolio.reducer;
