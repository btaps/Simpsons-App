import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./characters";
import errorsReducer from "./errors";

export default configureStore({
  reducer: {
    characters: charactersReducer,
    errors: errorsReducer,
  },
});
