// Imports
import { GraphQLInt, GraphQLList } from "graphql";

// App Imports
import LastNameType from "./types";
import { getById, getAll } from "./resolvers";

// Last name get by id
export const getLastNameById = {
  type: new GraphQLList(LastNameType),
  args: {
    id: { type: GraphQLInt },
  },
  resolve: getById,
};

// Characters All
export const getAllLastNames = {
  type: new GraphQLList(LastNameType),
  resolve: getAll,
};
