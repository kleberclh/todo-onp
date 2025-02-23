import express from "express";
import router from "./routes";

const server = express();
// Para identificar o que vem no post
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(router);

server.listen(3000);
