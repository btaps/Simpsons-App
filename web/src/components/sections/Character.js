//App Imports
import "./Character.scss";

function Character({ character }) {
  return (
    <div className="flex center column">
      <div>First Name: {character.first_name}</div>
      <div>Last Name: {character.last_name_id}</div>
      <div>Occupation: {character.occupation_id}</div>
      <div>Voice Actor: {character.voice_actor_id}</div>
      <div>Catch Phrase: {character.catch_phrase}</div>
      <div>Age Range: {character.age_range}</div>
    </div>
  );
}

export default Character;
