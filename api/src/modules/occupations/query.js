// Imports
import { GraphQLInt, GraphQLList } from "graphql";

// App Imports
import OccupationType from "./types";
import { getById, getAll } from "./resolvers";

// Last name get by id
export const getOccupationById = {
  type: new GraphQLList(OccupationType),
  args: {
    id: { type: GraphQLInt },
  },
  resolve: getById,
};

// Characters All
export const getAllOccupations = {
  type: new GraphQLList(OccupationType),
  resolve: getAll,
};
