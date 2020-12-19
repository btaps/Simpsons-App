import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { loadOneCharacter } from "../../setup/services/characters";
import { getCharacterByName } from "../../modules/characters/queries";

import "./Intro.scss";

function renderRandom() {
  return (
    <React.Fragment>
      <button className="intro-button" onClick={() => {}}>
        Get Random
      </button>
    </React.Fragment>
  );
}

function renderSearch(
  _showSearch,
  _searchText,
  _updateSearchText,
  _dispatch,
  _setShowSearch
) {
  return (
    <React.Fragment>
      <input
        className={_showSearch ? "intro-search show" : "intro-search hide"}
        type="text"
        placeholder="Ex: Homer"
        name="search"
        onChange={_updateSearchText}
      ></input>
      <button
        type="button"
        className={_showSearch ? "intro-button move" : "intro-button"}
        onClick={() => {
          if (_showSearch) {
            //_dispatch(loadAllCharacters(getAll()));
            _dispatch(loadOneCharacter(getCharacterByName(_searchText)));
          }
          _setShowSearch(true);
        }}
      >
        Search
      </button>
    </React.Fragment>
  );
}

function renderSimpsonsIntro() {
  return (
    <React.Fragment>
      <aside className="the-simpsons">
        <p>THE</p>
        <p>SIMPSONS</p>
        <p className="intro-credits">Character App</p>
      </aside>
    </React.Fragment>
  );
}

function renderClouds() {
  return (
    <React.Fragment>
      <div className="clouds top">
        <div className="cloud-one left">
          <span className="bubble-one cloud"></span>
          <span className="bubble-two cloud"></span>
        </div>
        <div className="cloud-two left">
          <span className="bubble-one cloud"></span>
          <span className="bubble-two cloud"></span>
        </div>
        <div className="cloud-three right">
          <span className="bubble-one cloud"></span>
          <span className="bubble-two cloud"></span>
        </div>
      </div>
      <div className="clouds middle">
        <div className="cloud-four left">
          <span className="bubble-one cloud"></span>
          <span className="bubble-two cloud"></span>
        </div>
        <div className="cloud-five right">
          <span className="bubble-one cloud"></span>
          <span className="bubble-two cloud"></span>
        </div>
      </div>
      <div className="clouds bottom">
        <div className="cloud-six right">
          <span className="bubble-one cloud"></span>
          <span className="bubble-two cloud"></span>
        </div>
        <div className="cloud-seven left">
          <span className="bubble-one cloud"></span>
          <span className="bubble-two cloud"></span>
        </div>
        <div className="cloud-eight right">
          <span className="bubble-one cloud"></span>
          <span className="bubble-two cloud"></span>
        </div>
        <div className="cloud-nine left">
          <span className="bubble-one cloud"></span>
          <span className="bubble-two cloud"></span>
        </div>
      </div>
    </React.Fragment>
  );
}

function Intro() {
  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const updateSearchText = (event) => {
    setSearchText(event.target.value);
  };

  setTimeout(() => {
    let leftClouds = document.getElementsByClassName("left");
    let rightClouds = document.getElementsByClassName("right");
    let simpsonsText = document.getElementsByClassName("the-simpsons");

    for (let i = 0; i < leftClouds.length; i++) {
      let cloud = leftClouds[i];
      cloud.classList.add("to-left");
    }
    for (let i = 0; i < rightClouds.length; i++) {
      let cloud = rightClouds[i];
      cloud.classList.add("to-right");
    }

    for (let i = 0; i < simpsonsText.length; i++) {
      let introText = simpsonsText[i];
      introText.classList.add("zoom");
    }
  }, [300]);

  return (
    <div className="intro-main-div">
      <section class="above"></section>
      <section className="intro-center flex center column">
        {renderClouds()}
        {renderSimpsonsIntro()}
      </section>
      <section className="below flex center">
        {renderSearch(
          showSearch,
          searchText,
          updateSearchText,
          dispatch,
          setShowSearch
        )}
      </section>
    </div>
  );
}

export default Intro;
