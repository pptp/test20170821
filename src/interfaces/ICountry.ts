export interface ICurrency {
    code: string;
    name: string;
    symbol: string;
}

export interface ILanguage {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

export interface IRegionalBlock {
    acronym: string;
    name: string;
    otherAcronyms: Array<string>;
    otherNames: Array<string>;
}

export interface ICountry {
    name: string;
    topLevelDomain: Array<string>;
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: Array<number>;
    capital: string;
    altSpellings: Array<string>;
    region: string;
    subregion: string;
    population: number;
    latlng: Array<number>;
    demonym: string;
    area: number;
    gini: number;
    timezones: Array<string>;
    borders: Array<string>;
    nativeName: string;
    numericCode: number;
    currencies: Array<ICurrency>;
    languages: Array<ILanguage>;
    translations: {['abbr']: string };
    flag: string;
    regionalBlocs: Array<IRegionalBlock>;
}
