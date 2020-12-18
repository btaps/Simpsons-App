// Imports
import { query, mutation } from "gql-query-builder";

export function getAllVoiceActors() {
  return query({
    operation: "getAllVoiceActors",
    fields: ["name"],
  });
}

export function getVoiceActorById(id) {
  return query({
    operation: "getVoiceActorById",
    variables: { id: id },
    fields: ["name"],
  });
}
