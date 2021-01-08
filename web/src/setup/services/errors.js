import { setShowError, setErrorMessage } from "../store/errors";

export const errorMessage = (message) => (dispatch) => {
  dispatch(setShowError(true));
  dispatch(setErrorMessage(message));
};
