import express from "express";
const server = express();
import routes from './routes/routes';

server.use('/', routes);

export default server;