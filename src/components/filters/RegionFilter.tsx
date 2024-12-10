'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

interface RegionFilterProps {
  onRegionChange: (region: string) => void;
}

export function RegionFilter({ onRegionChange }: RegionFilterProps) {
  return (
    <div className="relative">
      <select
        onChange={(e) => onRegionChange(e.target.value)}
        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md appearance-none bg-white"
      >
        <option value="">Filter by Region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <ChevronDown className="h-4 w-4 text-gray-400" />
      </div>
    </div>
  );
}