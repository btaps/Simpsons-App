// Imports
import { query, mutation } from "gql-query-builder";

export function getAll() {
  return query({
    operation: "characterAll",
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

export function getByName(name) {
  return query({
    operation: "characterByName",
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
