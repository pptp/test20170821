import { Server } from './Server';
import { IController } from './interfaces/IController';
import { fetchCountry } from './base/functions/fetchCountry';

export class App {
  protected server;
  public db;

  constructor() {
    this.server = new Server();
  }

  /*
   * Some kind of simple Service Locator
  */
  get fetchCountry() {
    return fetchCountry;
  }

  bootstrap() {
    this.server.run();
  }

  registerController(controller: IController) {
    this.server.registerController(controller);
  }
}
