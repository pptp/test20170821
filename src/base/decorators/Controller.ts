import { app } from 'src';
import { IController } from 'src/interfaces/IController';
import { AbstractController } from 'src/base/AbstractController';

export function Controller(route) {
  return function classDecorator<T extends { new(...args: any[]): AbstractController }>(constructor: T) {
    class Instance extends constructor  {
      route = route;
    }

    const controller = new Instance();
    app.registerController(controller);
  };
}
