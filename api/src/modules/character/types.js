// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";

// Crate type
const CharacterType = new GraphQLObjectType({
  name: "character",
  description: "Character Type",

  fields: () => ({
    id: { type: GraphQLInt },
    first_name: { type: GraphQLString },
    last_name_id: { type: GraphQLInt },
    occupation_id: { type: GraphQLInt },
    voice_actor_id: { type: GraphQLInt },
    catch_phrase: { type: GraphQLString },
    age_range: { type: GraphQLString },
  }),
});

export default CharacterType;
