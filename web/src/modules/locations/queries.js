// Imports
import { query, mutation } from "gql-query-builder";

export function getAllLocations() {
  return query({
    operation: "getAllLocations",
    fields: ["name"],
  });
}

export function getLocationById(id) {
  return query({
    operation: "getLocationById",
    variables: { id: id },
    fields: ["name"],
  });
}
