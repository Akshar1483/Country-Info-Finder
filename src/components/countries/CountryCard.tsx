'use client';

import React from 'react';
import Image from 'next/image';
import type { Country } from '@/types/country';

interface CountryCardProps {
  country: Country;
}

export function CountryCard({ country }: CountryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-40">
        <Image
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{country.name.common}</h3>
        <div className="space-y-1 text-sm text-gray-600">
          <p>
            <span className="font-medium">Population:</span>{' '}
            {country.population.toLocaleString()}
          </p>
          <p>
            <span className="font-medium">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-medium">Capital:</span>{' '}
            {country.capital?.[0] || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
}