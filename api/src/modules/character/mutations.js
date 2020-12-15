// Imports
import { GraphQLString, GraphQLInt } from "graphql";

// App Imports
import CharacterType from "./types";
import { create, remove, update } from "./resolvers";

// Character create
export const characterCreate = {
  type: CharacterType,
  args: {
    first_name: {
      name: "name",
      type: GraphQLString,
    },
    last_name_id: {
      name: "last name id",
      type: GraphQLInt,
    },
    occupation_id: {
      name: "occupation_id id",
      type: GraphQLInt,
    },
    voice_actor_id: {
      name: "voice over actor id",
      type: GraphQLInt,
    },
    catch_phrase: {
      name: "Catch phrase",
      type: GraphQLString,
    },
    age_range: {
      name: "Age range",
      type: GraphQLString,
    },
  },
  resolve: create,
};

// Character remove
export const characterRemove = {
  type: CharacterType,
  args: {
    characterId: {
      name: "id",
      type: GraphQLInt,
    },
  },
  resolve: remove,
};

// Character update
export const characterUpdate = {
  type: CharacterType,
  args: {
    characterId: {
      name: "id",
      type: GraphQLInt,
    },
    first_name: {
      name: "First name",
      type: GraphQLString,
    },
  },
  resolve: update,
};
