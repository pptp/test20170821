import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as methodOverride from 'method-override';
import * as path from 'path';

import { IController } from './interfaces/IController';

export class Server {
  protected app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  protected config() {
    const { app } = this;

    app.use(function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'X-Requested-With');
      next();
    });

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());


    app.use((err: any,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction) => {

      res.status(err.code || 500)
          .send(err || 'An error occurred during the request.');
      }
    );

    app.use(express.static(path.join(__dirname, 'static')));
  }

  public registerController(controller: IController) {
    const { app } = this;

    const router = app.route(controller.route);
    controller.register(router);
  }

  public run() {
    this.app.listen(8080);
  }
}
