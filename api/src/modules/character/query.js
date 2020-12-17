// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from "graphql";

// App Imports
import CharacterType from "./types";
import { getAll, getByName } from "./resolvers";

// Characters All
export const characterAll = {
  type: new GraphQLList(CharacterType),
  resolve: getAll,
};

// Character By ID
export const characterByName = {
  type: CharacterType,
  args: {
    characterName: { type: GraphQLString },
  },
  resolve: getByName,
};

