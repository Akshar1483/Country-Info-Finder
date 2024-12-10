import { NextResponse } from 'next/server';
import { searchCountries, getCountriesByRegion } from '@/lib/api';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const region = searchParams.get('region');

  try {
    let data = [];
    if (query) {
      data = await searchCountries(query);
    } else if (region) {
      data = await getCountriesByRegion(region);
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch countries' }, { status: 500 });
  }
}