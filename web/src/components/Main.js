import { useEffect } from "react";

//App imports
import { APP_URL_API } from "../setup/config/env";

import Intro from "./sections/Intro";
import getAll from "../modules/characters/api";

const routeApi = "http://localhost:8000";
console.log(APP_URL_API);
const query2 = { query: "{characterById(characterId:1){first_name}}" };
const query = {
  query:
    "{characterAll{first_name, last_name_id, occupation_id, voice_actor_id, catch_phrase, age_range}}",
};

function Main() {
  useEffect(() => {
    getAll(routeApi, query2)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("Error getting all characters " + error));
  }, []);
  return (
    <div>
      <Intro />
    </div>
  );
}

export default Main;
