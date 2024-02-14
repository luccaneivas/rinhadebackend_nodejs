import express, { Application } from "express";
import { router } from "./routes";

export const server: Application = express();
server.use(express.json());

server.use(router);
