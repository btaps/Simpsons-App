import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setShowError } from "../../setup/store/errors";
import errorImage from "./error_image.png";
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
      <div className="flex emc__div">
        <div className="flex center emc__message-div">{message}</div>
        <div className="flex emc__img-div">
          <img className="emc__img" src={errorImage} alt="error homer" />
        </div>
      </div>
    </div>
  );
}

export default ErrorMessage;
