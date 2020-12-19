// Imports
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//App Imports
import {
  loadLastName,
  loadOccupation,
  loadVoiceActor,
} from "../../setup/services/characters";
import { getLastNameById } from "../../modules/last-names/queries";
import { getOccupationById } from "../../modules/occupations/queries";
import { getVoiceActorById } from "../../modules/voice-over-actors/queries";
import "./Character.scss";

function Character({ character }) {
  const dispatch = useDispatch();
  const oneCharacter = useSelector((state) => state.characters.chosenCharacter);

  useEffect(() => {
    if (oneCharacter.last_name === undefined) {
      dispatch(
        loadLastName(getLastNameById(character.last_name_id), oneCharacter)
      );
    }
    if (oneCharacter.occupation === undefined) {
      dispatch(
        loadOccupation(getOccupationById(character.occupation_id), oneCharacter)
      );
    }
    if (oneCharacter.voice_over_actor === undefined) {
      dispatch(
        loadVoiceActor(
          getVoiceActorById(character.voice_actor_id),
          oneCharacter
        )
      );
    }
  }, [oneCharacter, dispatch, character]);

  if (
    oneCharacter.occupation === undefined ||
    oneCharacter.last_name === undefined ||
    oneCharacter.voice_over_actor === undefined
  ) {
    return <h1>Loading...</h1>;
  }
  //window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  return (
    <div className="flex center column character-container">
      <div>
        <span className="cc__row">First Name:</span>
        <span className="cc__info">{character.first_name}</span>
      </div>
      <div>
        <span className="cc__row">Last Name:</span>
        <span className="cc__info">{character.last_name}</span>
      </div>
      <div>
        <span className="cc__row">Occupation:</span>
        <span className="cc__info">{character.occupation.title}</span>
      </div>
      <div>
        <span className="cc__row">Voice Actor:</span>
        <span className="cc__info">{character.voice_over_actor}</span>
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
