import { NewsResponse } from './types/news';

const DIRECTUS_URL = 'https://directus.zigma99.com';

export const API_ENDPOINTS = {
  news: `${DIRECTUS_URL}/items/news`,
};

export function getAssetUrl(assetId: string): string {
  return `${DIRECTUS_URL}/assets/${assetId}`;
}

export async function fetchNews(): Promise<NewsResponse> {
  const res = await fetch(API_ENDPOINTS.news, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch news');
  }

  return res.json();
}

export async function fetchNewsBySlug(slug: string): Promise<NewsResponse> {
  const res = await fetch(`${API_ENDPOINTS.news}?filter[slug][_eq]=${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch news item');
  }

  return res.json();
}
