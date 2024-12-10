const API_BASE_URL = 'https://restcountries.com/v3.1';

export interface Country {
  name: {
    common: string;
    official: string;
  };
  region: string;
  subregion?: string;
  population: number;
  capital?: string[]; // Optional, as it can be undefined
  flags: {
    svg: string;
    png: string;
  };
  languages?: { [key: string]: string };
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
}


export async function searchCountries(query: string): Promise<Country[]> {
  if (!query.trim()) return [];
  const response = await fetch(`${API_BASE_URL}/name/${query}`);
  if (!response.ok) {
    if (response.status === 404) return [];
    throw new Error(`Failed to fetch countries: ${response.statusText}`);
  }

  const data = await response.json();

  return data.map((country: any) => ({
    name: country.name,
    region: country.region,
    subregion: country.subregion,
    population: country.population,
    capital: country.capital || undefined, // Ensure undefined if not present
    flags: country.flags,
    languages: country.languages,
    currencies: country.currencies,
  }));
}

export async function getCountriesByRegion(region: string): Promise<Country[]> {
  if (!region.trim()) return [];
  const response = await fetch(`${API_BASE_URL}/region/${region}`);
  if (!response.ok) {
    if (response.status === 404) return [];
    throw new Error(`Failed to fetch countries by region: ${response.statusText}`);
  }

  const data = await response.json();

  return data.map((country: any) => ({
    name: country.name,
    region: country.region,
    subregion: country.subregion,
    population: country.population,
    capital: country.capital || undefined, // Ensure undefined if not present
    flags: country.flags,
    languages: country.languages,
    currencies: country.currencies,
  }));
}

