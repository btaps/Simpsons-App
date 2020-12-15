import express from "express";
import "dotenv/config";

// Create express server
const server = express();

// App Import
import setupLoadModules from "./setup/load-modules";
import setupGraphQL from "./setup/graphql";
import setupStartServer from "./setup/start-server";

// Setup load modules
setupLoadModules(server);

// Setup GraphQL
setupGraphQL(server);

// Start Server
setupStartServer(server);
