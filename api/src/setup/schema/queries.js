// Imports
import { GraphQLObjectType } from "graphql";

// App Imports
import * as character from "../../modules/character/query";
import * as lastName from "../../modules/last-names/query";
import * as occupation from "../../modules/occupations/query";
import * as locations from "../../modules/locations/query";
import * as voiceActors from "../../modules/voice-over-actors/query";

// Query
const query = new GraphQLObjectType({
  name: "query",
  description: "API Queries [Read]",

  fields: () => ({
    ...character,
    ...lastName,
    ...occupation,
    ...locations,
    ...voiceActors,
  }),
});

export default query;
