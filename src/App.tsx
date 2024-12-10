import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { SearchBar } from './components/search/SearchBar';
import { RegionFilter } from './components/filters/RegionFilter';
import { CountryGrid } from './components/countries/CountryGrid';
import { searchCountries, getCountriesByRegion } from './services/api';
import type { Country } from './types/country';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    async function fetchData() {
      if (!searchQuery && !selectedRegion) {
        setCountries([]); // Clear the list if both filters are empty
        return;
      }
  
      setLoading(true);
      try {
        let data: Country[] = [];
        if (searchQuery) {
          await searchCountries(searchQuery);
        } else if (selectedRegion) {
          await getCountriesByRegion(selectedRegion);
        }
        setCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setCountries([]);
      } finally {
        setLoading(false);
      }
    }
  
    const timeoutId = setTimeout(fetchData, 300); // Debounce for search
    return () => clearTimeout(timeoutId);
  }, [searchQuery, selectedRegion]);
  

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedRegion('');
  };

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-8">
          <SearchBar onSearch={handleSearch} />
          <RegionFilter onRegionChange={handleRegionChange} />
        </div>
        <CountryGrid countries={countries} loading={loading} />
      </main>
    </div>
  );
}

export default App;