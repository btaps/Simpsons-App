import { setShowOne, setShowRandom, setShowAll } from "../store/characters";
import { setShowError, setErrorMessage } from "../store/errors";

export const errorMessage = (message) => (dispatch) => {
  dispatch(setShowError(true));
  dispatch(setErrorMessage(message));
  dispatch(setShowOne(false));
  dispatch(setShowRandom(false));
  dispatch(setShowAll(false));
};
