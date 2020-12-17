// Imports
import axios from "axios";

//App imports
import { APP_URL_API } from "../config/env";
import {
  setShowOne,
  setShowAll,
  setOneCharacter,
  setAllCharacters,
} from "../store/characters";

export const loadAllCharacters = (query) => async (dispatch) => {
  try {
    dispatch(setShowAll(true));
    const { data } = await axios
      .post(APP_URL_API, query)
      .then((response) => response.data);

    dispatch(setAllCharacters(data));
  } catch (err) {
    console.log(err);
  }
};

export const loadOneCharacter = (query) => async (dispatch) => {
  try {
    dispatch(setShowOne(true));
    const { data } = await axios
      .post(APP_URL_API, query)
      .then((response) => response.data);

    dispatch(setOneCharacter(data));
  } catch (err) {
    console.log(err);
  }
};
