// Imports
import { GraphQLObjectType } from "graphql";

// App Imports
import * as character from "../../modules/character/mutations";

// Mutation
const mutation = new GraphQLObjectType({
  name: "mutations",
  description: "API Mutations [Create, Update, Delete]",

  fields: {
    ...character,
  },
});

export default mutation;
