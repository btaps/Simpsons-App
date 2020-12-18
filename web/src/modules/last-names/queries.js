// Imports
import { query, mutation } from "gql-query-builder";

export function getAllLastNames() {
  return query({
    operation: "getAllLastNames",
    fields: ["last_name"],
  });
}

export function getLastNameById(id) {
  return query({
    operation: "getLastNameById",
    variables: { id: id },
    fields: ["last_name"],
  });
}
