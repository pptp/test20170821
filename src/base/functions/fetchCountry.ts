import * as fetch from 'node-fetch';
import { ICountry } from 'src/interfaces/ICountry';

export async function fetchCountry(name: string): Promise<Array<ICountry>> {
    /* Do not forget to escape a country name */
    name = name.replace(/[^a-zA-Z0-9]/, '');
    try {
        const result = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
        return result.json();
    } catch (e) {
        console.error(e);
    }
}
