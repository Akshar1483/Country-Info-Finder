'use client';

import { useState } from 'react';
import { SearchBar } from '@/components/search/SearchBar';
import { RegionFilter } from '@/components/filters/RegionFilter';
import { CountryGrid } from '@/components/countries/CountryGrid';
import { useCountries } from '@/hooks/useCountries';

export function CountryExplorer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  
  const { countries, loading } = useCountries({ searchQuery, selectedRegion });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedRegion('');
  };

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
    setSearchQuery('');
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <SearchBar onSearch={handleSearch} />
        <RegionFilter onRegionChange={handleRegionChange} />
      </div>
      <CountryGrid countries={countries} loading={loading} />
    </div>
  );
}