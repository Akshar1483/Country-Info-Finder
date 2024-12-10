'use client';

import React from 'react';
import type { Country } from '@/types/country';
import { CountryCard } from './CountryCard';

interface CountryGridProps {
  countries: Country[];
  loading: boolean;
}

export function CountryGrid({ countries, loading }: CountryGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md h-72 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (countries.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No countries found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
}