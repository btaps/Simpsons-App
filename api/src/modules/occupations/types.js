// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";

// Crate type
const OccupationType = new GraphQLObjectType({
  name: "occupations",
  description: "Occupation Type",

  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    location_id: { type: GraphQLInt },
  }),
});

export default OccupationType;
