import * as fetch from 'node-fetch';
import { ICountry } from 'src/interfaces/ICountry';

export async function fetchCountry(name: string): Promise<Array<ICountry>> {
    /* Do not forget to escape a country name */
    name = name.replace(/[^a-zA-Z0-9]/, '');
    try {
      const result = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
      const jsonResult = await result.json();

      if (jsonResult && jsonResult.status && parseInt(jsonResult.status, 10) !== 200) {
        return [];
      }
      return jsonResult;
    } catch (e) {
      console.error(e);
    }
}
