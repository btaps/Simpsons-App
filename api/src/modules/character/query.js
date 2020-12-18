// Imports
import { GraphQLString, GraphQLList } from "graphql";

// App Imports
import CharacterType from "./types";
import { getAll, getByName } from "./resolvers";

// Character By ID
export const getCharacterByName = {
  type: CharacterType,
  args: {
    characterName: { type: GraphQLString },
  },
  resolve: getByName,
};

// Characters All
export const getAllCharacters = {
  type: new GraphQLList(CharacterType),
  resolve: getAll,
};

