import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setShowError } from "../../setup/store/errors";
import "./errors.scss";

function ErrorMessage({ message, show }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (show === true) {
      setTimeout(() => {
        const errorDiv = document.getElementById("error");
        errorDiv.classList.remove("emc__show");
        dispatch(setShowError(false));
      }, 4000);
    }
  }, [show, dispatch]);

  return (
    <div
      className={
        show
          ? "flex center error-message-container emc__show"
          : "flex center error-message-container"
      }
      id="error"
    >
      <div>{message}</div>
    </div>
  );
}

export default ErrorMessage;
