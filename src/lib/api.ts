const API_BASE_URL = 'https://restcountries.com/v3.1';

export async function searchCountries(query: string) {
  if (!query) return [];
  const response = await fetch(`${API_BASE_URL}/name/${query}`);
  if (!response.ok) {
    if (response.status === 404) return [];
    throw new Error('Failed to fetch countries');
  }
  return response.json();
}

export async function getCountriesByRegion(region: string) {
  if (!region) return [];
  const response = await fetch(`${API_BASE_URL}/region/${region}`);
  if (!response.ok) {
    if (response.status === 404) return [];
    throw new Error('Failed to fetch countries by region');
  }
  return response.json();
}