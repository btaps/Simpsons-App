// Imports
import { graphqlHTTP } from "express-graphql";

// App Imports
import serverConfig from "../config/server.json";
import schema from "./schema";

// Setup GraphQL
export default function (server) {
  console.info("SETUP - GraphQL...");

  // API (GraphQL on route `/`)
  server.use(
    serverConfig.graphql.endpoint,
    graphqlHTTP((request) => ({
      schema,
      graphiql: serverConfig.graphql.ide,
      pretty: serverConfig.graphql.pretty,
    }))
  );
}
