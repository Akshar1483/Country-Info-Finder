import React from 'react';
import { Globe2 } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center">
          <Globe2 className="h-6 w-6 text-blue-600" />
          <h1 className="ml-2 text-xl font-semibold text-gray-900">
            Country Explorer
          </h1>
        </div>
      </div>
    </header>
  );
}