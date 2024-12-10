import { useState, useEffect } from 'react';
import type { Country } from '@/types/country';

interface UseCountriesProps {
  searchQuery: string;
  selectedRegion: string;
}

export function useCountries({ searchQuery, selectedRegion }: UseCountriesProps) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (searchQuery) params.append('query', searchQuery);
        if (selectedRegion) params.append('region', selectedRegion);

        const response = await fetch(`/api/countries?${params}`);
        if (!response.ok) throw new Error('Failed to fetch countries');
        
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
        setCountries([]);
      } finally {
        setLoading(false);
      }
    }

    const timeoutId = setTimeout(fetchData, 300);
    return () => clearTimeout(timeoutId);
  }, [searchQuery, selectedRegion]);

  return { countries, loading };
}