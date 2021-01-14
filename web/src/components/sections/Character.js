// Imports
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import path from "path";

//App Imports
import { setShowError, setErrorMessage } from "../../setup/store/errors";
import { setIsLoading, setShowOne } from "../../setup/store/characters";
import { APP_URL_API } from "../../setup/config/env";
import { getLastNameById } from "../../modules/last-names/queries";
import { getOccupationById } from "../../modules/occupations/queries";
import { getVoiceActorById } from "../../modules/voice-over-actors/queries";
import Loading from "../ui/loading";
import "./Character.scss";

function Character({ character }) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.characters.isLoading);
  const [lastName, setLastName] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [voiceActor, setVoiceActor] = useState(null);
  const IMG_PATH = path.join(__dirname, "images");

  useEffect(() => {
    if (
      (lastName === null && occupation === null && voiceActor === null) ||
      isLoading
    ) {
      dispatch(setIsLoading(false));
      async function loadCharacterInfo() {
        try {
          await axios
            .post(APP_URL_API, getLastNameById(character.last_name_id))
            .then((response) =>
              setLastName(response.data.data.getLastNameById[0].last_name)
            )
            .catch((err) => console.log(err));
          await axios
            .post(APP_URL_API, getOccupationById(character.occupation_id))
            .then((response) =>
              setOccupation(response.data.data.getOccupationById[0])
            )
            .catch((err) => console.log(err));

          await axios
            .post(APP_URL_API, getVoiceActorById(character.voice_actor_id))
            .then((response) =>
              setVoiceActor(response.data.data.getVoiceActorById[0].name)
            )
            .catch((err) => console.log(err));
        } catch (err) {
          dispatch(setShowOne(false));
          dispatch(setShowError(true));
          dispatch(setErrorMessage("Error loading character"));
          console.log(err);
        }
      }
      loadCharacterInfo();
    }

    // Scroll after character loads
    const scrollToDiv = document.getElementsByClassName("below")[0];
    if (scrollToDiv !== undefined) {
      setTimeout(() => window.scrollTo(0, 540), 100);
    }
  }, [lastName, occupation, voiceActor, character, dispatch, isLoading]);

  if (lastName === null || occupation === null || voiceActor === null) {
    return (
      <div className="flex center column cc__character">
        <Loading />
      </div>
    );
  }
  return (
    <div className="flex center column cc__character">
      <div className="mc--scroll">
        <img
          src={`${IMG_PATH}/${character.first_name}.png`}
          alt="simpson character"
        />
      </div>
      <div>
        <span className="cc__row">First Name:</span>
        <span className="cc__info">{character.first_name}</span>
      </div>
      <div>
        <span className="cc__row">Last Name:</span>
        <span className="cc__info">{lastName}</span>
      </div>
      <div>
        <span className="cc__row">Occupation:</span>
        <span className="cc__info">{occupation.title}</span>
      </div>
      <div>
        <span className="cc__row">Voice Actor:</span>
        <span className="cc__info">{voiceActor}</span>
      </div>
      <div>
        <span className="cc__row">Catch Phrase:</span>"
        <span className="cc__info">{character.catch_phrase}</span>"
      </div>
      <div>
        <span className="cc__row">Age Range:</span>
        <span className="cc__info">{character.age_range}</span>
      </div>
    </div>
  );
}

export default Character;
