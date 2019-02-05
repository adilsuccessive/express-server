import * as bodyParser from 'body-parser';
import * as express from 'express';
import { IConfig } from './config/IConfig';
import Database from './libs/Database';
import { errorHandler, notFoundRoute } from './libs/routes';
import { router } from './router';

export default class Server {
  private app: express.Express;
  constructor(private config: IConfig) {
    this.app = express();
  }
  public bootstrap() {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }
  public setupRoutes() {
    const { app } = this;
    app.use('/health-check', (req, res) => {
      res.send('I am Ok');
    });

    app.use('/api', router);
    app.use(notFoundRoute);
    app.use(errorHandler);
  }
  public run() {
    const {
      app,
      config: { port, mongo_url },
    } = this;
    console.log(mongo_url);
    Database.open(mongo_url)
      .then(() => {
        app.listen(port, (error) => {
          if (error) {
            throw error;
          }

          console.log(`app is listening on port ${port}`);
        });
      })
      .catch(() => {
        console.log('Error in Connection');
      });
  }
  private initBodyParser() {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
  }
}
