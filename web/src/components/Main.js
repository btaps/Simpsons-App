// Imports
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

//App imports
import Intro from "./sections/Intro";
import Character from "./sections/Character";
import "./Main.scss";

function Main() {
  const showOneCharacter = useSelector((state) => state.characters.showOne);
  const oneCharacter = useSelector((state) => state.characters.chosenCharacter);

  useEffect(() => {}, []);
  return (
    <div className="main-container">
      <Intro />
      {showOneCharacter && oneCharacter ? (
        <Character character={oneCharacter} />
      ) : null}
    </div>
  );
}

export default Main;
