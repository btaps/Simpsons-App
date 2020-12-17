import { useState } from "react";
import { useDispatch } from "react-redux";
//import axios from "axios";
//import { query, mutation } from "gql-query-builder";

import {
  loadAllCharacters,
  loadOneCharacter,
} from "../../setup/services/characters";
import { getAll, getByName } from "../../modules/characters/queries";
import "./Intro.scss";

function Intro() {
  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);

  setTimeout(() => {
    let leftClouds = document.getElementsByClassName("left");
    let rightClouds = document.getElementsByClassName("right");
    let text = document.getElementsByClassName("the-simpsons");
    //let lastScroll = 0;

    for (let i = 0; i < leftClouds.length; i++) {
      let cloud = leftClouds[i];
      cloud.classList.add("to-left");
    }
    for (let i = 0; i < rightClouds.length; i++) {
      let cloud = rightClouds[i];
      cloud.classList.add("to-right");
    }

    for (let i = 0; i < text.length; i++) {
      let introText = text[i];
      introText.classList.add("zoom");
    }
  }, [300]);

  return (
    <div className="intro-main-div">
      <section class="above"></section>
      <section className="intro-center flex center column">
        <div className="clouds top">
          <div className="cloud-one left">
            <span className="bubble-one"></span>
            <span className="bubble-two"></span>
          </div>
          <div className="cloud-two left">
            <span className="bubble-one"></span>
            <span className="bubble-two"></span>
          </div>
          <div className="cloud-three right">
            <span className="bubble-one"></span>
            <span className="bubble-two"></span>
          </div>
        </div>
        <div className="clouds middle">
          <div className="cloud-four left">
            <span className="bubble-one"></span>
            <span className="bubble-two"></span>
          </div>
          <div className="cloud-five right">
            <span className="bubble-one"></span>
            <span className="bubble-two"></span>
          </div>
        </div>
        <div className="clouds bottom">
          <div className="cloud-six right">
            <span className="bubble-one"></span>
            <span className="bubble-two"></span>
          </div>
          <div className="cloud-seven left">
            <span className="bubble-one"></span>
            <span className="bubble-two"></span>
          </div>
          <div className="cloud-eight right">
            <span className="bubble-one"></span>
            <span className="bubble-two"></span>
          </div>
          <div className="cloud-nine left">
            <span className="bubble-one"></span>
            <span className="bubble-two"></span>
          </div>
        </div>
        <aside className="the-simpsons">
          <p>THE</p>
          <p>SIMPSONS</p>
          <p className="intro-credits">Character App</p>
        </aside>
      </section>
      <section className="below flex center">
        <input
          className={showSearch ? "intro-search show" : "intro-search hide"}
        ></input>
        <button
          className={showSearch ? "intro-button move" : "intro-button"}
          onClick={() => {
            if (showSearch) {
              dispatch(loadAllCharacters(getAll()));
              dispatch(loadOneCharacter(getByName("Homer")));
            }
            setShowSearch(true);
          }}
        >
          Search
        </button>
      </section>
    </div>
  );
}

export default Intro;
