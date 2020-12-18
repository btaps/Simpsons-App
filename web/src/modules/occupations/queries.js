// Imports
import { query, mutation } from "gql-query-builder";

export function getAllOccupations() {
  return query({
    operation: "getAllOccupations",
    fields: ["title", "location_id"],
  });
}

export function getOccupationById(id) {
  return query({
    operation: "getOccupationById",
    variables: { id: id },
    fields: ["title", "location_id"],
  });
}
