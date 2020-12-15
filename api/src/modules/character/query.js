// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from "graphql";

// App Imports
import CharacterType from "./types";
import { getAll, getById } from "./resolvers";

// Characters All
export const characterAll = {
  type: new GraphQLList(CharacterType),
  resolve: getAll,
};

// Character By ID
export const characterById = {
  type: CharacterType,
  args: {
    characterId: { type: GraphQLInt },
  },
  resolve: getById,
};

