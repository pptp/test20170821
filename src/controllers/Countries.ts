import { app } from 'src';
import { AbstractController } from 'src/base/AbstractController';
import * as express from 'express';
import { Controller } from 'src/base/decorators/Controller';
import { ICountry } from 'src/interfaces/ICountry';
import { IResponseCountry } from 'src/interfaces/IResponseCountry';

/* A list of existed flags */
import * as countriesSrcObject from 'svg-country-flags/countries.json';

/* Transform list of countries in more convenient format */
const countriesObject = {};
Object.keys(countriesSrcObject).forEach((countryCode) => {
  countriesObject[countriesSrcObject[countryCode]] = countryCode.toLowerCase();
});

/*
  simpliest controller-decorator.
  it will be better to create route-decorator for creating a fully-featured API
*/
@Controller('/countries/:name')
class CountriesController extends AbstractController {

  /* get file of our flag by it's name */
  getFlag(countryName: string): string {
    const countryCode = countriesObject[countryName];
    if (countryCode) {
      return `/static/flags/${countryCode}.png`;
    } else {
      return null;
    }
  }

  async get(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const search = req.params.name;

    /*
      Some kind of simple middleware to inject our flag and for caching in future.
    */
    const foundCountries = await app.fetchCountry(search);

    const result = foundCountries.map((foundCountry: ICountry): IResponseCountry => {
      const responseCountry = <IResponseCountry>Object.assign({}, foundCountry);
      const countryName = responseCountry.name;
      /*
        the result allready contains a flag but we
        need to inject our flag file following the conditions
        of task
      */
      responseCountry.ourFlag = this.getFlag(countryName);
      return responseCountry;
    });

    res.send(result);

    next();
  }
}
