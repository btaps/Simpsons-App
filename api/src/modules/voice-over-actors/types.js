// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";

// Crate type
const VoiceActorType = new GraphQLObjectType({
  name: "voice_over_actors",
  description: "Voice Actor Type",

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  }),
});

export default VoiceActorType;
