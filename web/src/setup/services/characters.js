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
import { setShowError, setErrorMessage } from "../store/errors";

export const loadAllCharacters = (query) => async (dispatch) => {
  try {
    dispatch(setShowAll(true));
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

export const loadLastName = (query, initialState) => async (dispatch) => {
  try {
    const { data } = await axios
      .post(APP_URL_API, query)
      .then((response) => response.data);
    dispatch(
      setOneCharacter({
        ...initialState,
        last_name: data.getLastNameById[0].last_name,
      })
    );
  } catch (err) {
    dispatch(setShowError(true));
    dispatch(setErrorMessage("Error loading last name with that id"));
    console.log(err);
  }
};

export const loadOccupation = (query, initialState) => async (dispatch) => {
  try {
    const { data } = await axios
      .post(APP_URL_API, query)
      .then((response) => response.data);
    dispatch(
      setOneCharacter({
        ...initialState,
        occupation: data.getOccupationById[0],
      })
    );
  } catch (err) {
    dispatch(setShowError(true));
    dispatch(setErrorMessage("Error loading occupation with that id"));
    console.log(err);
  }
};

export const loadVoiceActor = (query, initialState) => async (dispatch) => {
  try {
    const { data } = await axios
      .post(APP_URL_API, query)
      .then((response) => response.data);
    console.log(data);
    dispatch(
      setOneCharacter({
        ...initialState,
        voice_over_actor: data.getVoiceActorById[0].name,
      })
    );
  } catch (err) {
    dispatch(setShowError(true));
    dispatch(setErrorMessage("Error loading voice actor with that id"));
    console.log(err);
  }
};
