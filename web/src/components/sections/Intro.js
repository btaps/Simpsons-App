import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  loadOneCharacter,
  loadAllCharacters,
  loadRandomCharacter,
} from "../../setup/services/characters";
import {
  getCharacterByName,
  getAllCharacters,
} from "../../modules/characters/queries";
import {
  setShowOne,
  setShowAll,
  setShowRandom,
} from "../../setup/store/characters";

import "./Intro.scss";

function renderAllCharacters(
  _dispatch,
  _showOne,
  _showRandom,
  _showSearch,
  _setShowSearch
) {
  return (
    <React.Fragment>
      <button
        className="intro-button"
        onClick={() => {
          if (_showOne) _dispatch(setShowOne(false));
          if (_showRandom) _dispatch(setShowRandom(false));
          if (_showSearch) _setShowSearch(false);
          _dispatch(setShowAll(true));
        }}
      >
        All Characters
      </button>
    </React.Fragment>
  );
}

function renderRandom(
  _dispatch,
  _allCharacters,
  _showOne,
  _showAll,
  _showSearch,
  _setShowSearch
) {
  return (
    <React.Fragment>
      <button
        className="intro-button"
        onClick={() => {
          if (_showOne) _dispatch(setShowOne(false));
          if (_showAll) _dispatch(setShowAll(false));
          if (_showSearch) _setShowSearch(false);
          const totalCharacters = _allCharacters.length;
          const randomIndex = Math.floor(Math.random() * totalCharacters);
          const randomCharacter = _allCharacters[randomIndex];

          _dispatch(loadRandomCharacter(randomCharacter));
        }}
      >
        Random
      </button>
    </React.Fragment>
  );
}

function renderSearch(
  _showSearch,
  _searchText,
  _updateSearchText,
  _dispatch,
  _setShowSearch,
  _showAll,
  _showRandom
) {
  return (
    <React.Fragment>
      <input
        id="intro-search"
        className="intro-search is--hide"
        type="text"
        placeholder="Ex: Homer"
        name="search"
        onChange={_updateSearchText}
      ></input>
      <button
        type="button"
        className="intro-button"
        id="intro-button"
        onClick={() => {
          // auto select input field for user
          const input = document.getElementById("intro-search");
          input.focus();
          input.select();
          if (_showSearch) {
            if (_showAll) _dispatch(setShowAll(false));
            if (_showRandom) _dispatch(setShowRandom(false));
            _dispatch(loadOneCharacter(getCharacterByName(_searchText)));
          } else {
            _setShowSearch(true);
          }
        }}
      >
        Search
      </button>
      <input type="submit" style={{ display: "none" }} />
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
  const showOne = useSelector((state) => state.characters.showOne);
  const showAll = useSelector((state) => state.characters.showAll);
  const showRandom = useSelector((state) => state.characters.showRandom);
  const allCharacters = useSelector((state) => state.characters.allCharacters);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const updateSearchText = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    if (Object.keys(allCharacters).length === 0)
      dispatch(loadAllCharacters(getAllCharacters()));

    const searchButton = document.getElementById("intro-button");
    const searchInput = document.getElementById("intro-search");
    if (showSearch) {
      searchButton.classList.add("is--move");
      setTimeout(() => {
        searchInput.classList.add("is--show");
        searchInput.classList.remove("is--hide");
      }, [500]);
    } else {
      searchInput.classList.add("is--hide");
      searchInput.classList.remove("is--show");
      searchButton.classList.remove("is--move");
    }
  }, [dispatch, allCharacters, showSearch]);

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
      <section className="below flex space-around row">
        <div className="flex center">
          {renderRandom(
            dispatch,
            allCharacters,
            showOne,
            showAll,
            showSearch,
            setShowSearch
          )}
        </div>
        <div className="flex center">
          {renderSearch(
            showSearch,
            searchText,
            updateSearchText,
            dispatch,
            setShowSearch,
            showAll,
            showRandom
          )}
        </div>
        <div className="flex center">
          {renderAllCharacters(
            dispatch,
            showOne,
            showRandom,
            showSearch,
            setShowSearch
          )}
        </div>
      </section>
    </div>
  );
}

export default Intro;
