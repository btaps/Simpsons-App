// Imports
import { GraphQLInt, GraphQLList } from "graphql";

// App Imports
import LocationType from "./types";
import { getById, getAll } from "./resolvers";

// Last name get by id
export const getLocationById = {
  type: new GraphQLList(LocationType),
  args: {
    id: { type: GraphQLInt },
  },
  resolve: getById,
};

// Characters All
export const getAllLocations = {
  type: new GraphQLList(LocationType),
  resolve: getAll,
};
