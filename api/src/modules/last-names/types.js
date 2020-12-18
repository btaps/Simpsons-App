// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";

// Crate type
const LastNameType = new GraphQLObjectType({
  name: "last_names",
  description: "Last Name Type",

  fields: () => ({
    id: { type: GraphQLInt },
    last_name: { type: GraphQLString },
  }),
});

export default LastNameType;
