// Imports
import { GraphQLObjectType } from "graphql";

// App Imports
import * as character from "../../modules/character/query";

// Query
const query = new GraphQLObjectType({
  name: "query",
  description: "API Queries [Read]",

  fields: () => ({
    ...character,
  }),
});

export default query;
