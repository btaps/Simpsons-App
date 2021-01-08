// Imports
import { useEffect } from "react";
import { useSelector } from "react-redux";

//App imports
import Intro from "./sections/Intro";
import Character from "./sections/Character";
import ErrorMessage from "./ui/errors";
import "./Main.scss";

function renderAllCharacters(state) {
  return (
    <div className="flex space-around row characters-container">
      {state.map((char, index) => (
        <Character key={index} character={char} />
      ))}
    </div>
  );
}

function Main() {
  const showOneCharacter = useSelector((state) => state.characters.showOne);
  const showAll = useSelector((state) => state.characters.showAll);
  const showRandom = useSelector((state) => state.characters.showRandom);
  const oneCharacter = useSelector((state) => state.characters.chosenCharacter);
  const allCharacters = useSelector((state) => state.characters.allCharacters);
  const error = useSelector((state) => state.errors);

  useEffect(() => {
    // expand height per selection
    const characterDiv = document.getElementsByClassName("mc--expand")[0];
    if (showAll) {
      characterDiv.style.height = "9858.35px";
    } else if (showOneCharacter || showRandom) {
      characterDiv.style.height = "535.15px";
    } else if (oneCharacter === undefined) {
      characterDiv.style.height = "0";
    }
  }, [showOneCharacter, showRandom, showAll, oneCharacter]);

  return (
    <div className="main-container">
      <div className="mc--move"></div>
      <Intro />
      <div className="mc--expand">
        {showRandom ? <Character character={oneCharacter} /> : null}
        {showOneCharacter ? <Character character={oneCharacter} /> : null}
        {showAll ? renderAllCharacters(allCharacters) : null}
      </div>
      <ErrorMessage message={error.errorMessage} show={error.showError} />
    </div>
  );
}

export default Main;
