// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";

// Crate type
const LocationType = new GraphQLObjectType({
  name: "locations",
  description: "Location Type",

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  }),
});

export default LocationType;
