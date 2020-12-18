// Imports
import { query, mutation } from "gql-query-builder";

export function getAllCharacters() {
  return query({
    operation: "getAllCharacters",
    fields: [
      "first_name",
      "last_name_id",
      "occupation_id",
      "voice_actor_id",
      "catch_phrase",
      "age_range",
    ],
  });
}

export function getCharacterByName(name) {
  return query({
    operation: "getCharacterByName",
    variables: { characterName: name },
    fields: [
      "first_name",
      "last_name_id",
      "occupation_id",
      "voice_actor_id",
      "catch_phrase",
      "age_range",
    ],
  });
}
