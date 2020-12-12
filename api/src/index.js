import express from "express";
import "dotenv/config";

// Create express server
const server = express();

// App Import
import setupStartServer from "./setup/start-server";

// Start Server
setupStartServer(server);
