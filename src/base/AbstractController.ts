import * as express from 'express';

import { IController } from 'src/interfaces/IController';

export abstract class AbstractController implements IController {
  route = null;

  public init() {
    //
  }

  register(router: express.IRoute) {
    const possibleMethods = [
      'get',
      'post',
      'put',
      'delete',
      'all'
    ];

    possibleMethods.forEach((method: string) => {
      if (this[method]) {
        router[method](this[method].bind(this));
      }
    });
  }
}
