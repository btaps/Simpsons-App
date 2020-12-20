// Imports
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

//App imports
import Intro from "./sections/Intro";
import Character from "./sections/Character";
import ErrorMessage from "./ui/errors";
import "./Main.scss";

function Main() {
  const showOneCharacter = useSelector((state) => state.characters.showOne);
  const oneCharacter = useSelector((state) => state.characters.chosenCharacter);
  const error = useSelector((state) => state.errors);

  useEffect(() => {}, []);
  return (
    <div className="main-container">
      <Intro />
      {showOneCharacter && oneCharacter ? (
        <Character character={oneCharacter} />
      ) : null}
      <ErrorMessage message={error.errorMessage} show={error.showError} />
    </div>
  );
}

export default Main;
