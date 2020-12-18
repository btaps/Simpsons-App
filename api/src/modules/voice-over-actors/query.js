// Imports
import { GraphQLInt, GraphQLList } from "graphql";

// App Imports
import VoiceActorType from "./types";
import { getById, getAll } from "./resolvers";

export const getVoiceActorById = {
  type: new GraphQLList(VoiceActorType),
  args: {
    id: { type: GraphQLInt },
  },
  resolve: getById,
};

export const getAllVoiceActors = {
  type: new GraphQLList(VoiceActorType),
  resolve: getAll,
};
