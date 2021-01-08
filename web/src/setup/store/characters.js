import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  showAll: false,
  showOne: false,
  showRandom: false,
  randomCharacter: null,
  oneCharacter: {},
  allCharacters: {},
};

const portfolio = createSlice({
  name: "Characters",
  initialState,
  reducers: {
    setIsLoading: (state, action) => void (state.isLoading = action.payload),
    setShowAll: (state, action) => void (state.showAll = action.payload),
    setShowOne: (state, action) => void (state.showOne = action.payload),
    setShowRandom: (state, action) => void (state.showRandom = action.payload),
    setOneCharacter: (state, action) =>
      void (state.chosenCharacter = action.payload),
    setAllCharacters: (state, action) =>
      void (state.allCharacters = action.payload),
  },
});

export const {
  setIsLoading,
  setShowAll,
  setShowOne,
  setShowRandom,
  setOneCharacter,
  setAllCharacters,
} = portfolio.actions;

export default portfolio.reducer;
