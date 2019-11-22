import 'dotenv/config';
import express from 'express';
import log from './app/middlewares/log';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(log('tiny'));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
