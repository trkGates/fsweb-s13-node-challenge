const express = require("express");
const server = express();
server.use(express.json());
const actionsRouter = require("./actions/actions-router");
const projectRouter = require("./projects/projects-router");

server.use("/api/actions", actionsRouter);
server.use("/api/projects", projectRouter);

module.exports = server;
