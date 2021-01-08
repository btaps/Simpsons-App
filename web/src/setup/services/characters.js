// Imports
import axios from "axios";

//App imports
import { APP_URL_API } from "../config/env";
import {
  setIsLoading,
  setShowOne,
  setShowRandom,
  setOneCharacter,
  setAllCharacters,
} from "../store/characters";
import { setShowError, setErrorMessage } from "../store/errors";

export const loadRandomCharacter = (character) => (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    dispatch(setShowRandom(true));
    dispatch(setOneCharacter(character));
  } catch (err) {
    dispatch(setShowError(true));
    dispatch(setErrorMessage("Error getting random character"));
    console.log(err);
  }
};

export const loadAllCharacters = (query) => async (dispatch) => {
  try {
    const { data } = await axios
      .post(APP_URL_API, query)
      .then((response) => response.data);
    dispatch(setAllCharacters(data.getAllCharacters));
  } catch (err) {
    dispatch(setShowError(true));
    dispatch(setErrorMessage("Error loading all characters"));
    console.log(err);
  }
};

export const loadOneCharacter = (query) => async (dispatch) => {
  try {
    const { data } = await axios
      .post(APP_URL_API, query)
      .then((response) => response.data);
    if (data.getCharacterByName === null) {
      dispatch(setShowError(true));
      dispatch(setErrorMessage("No character found with that name"));
    } else {
      dispatch(setShowOne(true));
      dispatch(setOneCharacter(data.getCharacterByName));
    }
  } catch (err) {
    dispatch(setShowError(true));
    dispatch(setErrorMessage("Error loading character"));
    console.log(err);
  }
};
