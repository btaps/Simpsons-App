// App imports
import axios from "axios";
import { query } from "gql-query-builder";

//const routeApi = "http://localhost:8000";
//const objectJSON = { query: "{characterById(characterId:1){first_name}}" };
//const reqJSON = JSON.stringify(objectJSON);

//class CharactersModel {
export default async function getAll(route, query) {
  const response = await fetch(route, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(query),
  });
  console.log(response);
  return response;
}

//static all = () => {
////return axios
////.post(
////routeApi,
////reqJSON
//////query({
//////operation: "character",
//////fields: [
//////"id",
//////"first_name",
//////"last_name_id",
//////"occupation_id",
//////"voice_actor_id",
//////"catch_phrase",
//////"age_range",
//////],
//////})
////)
//return fetch(routeApi)
//.then((response) => console.log(response))
//.catch((error) => console.log(error));
//};
//}

//export default CharactersModel;
