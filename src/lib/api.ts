import { NewsResponse } from './types/news';

const DIRECTUS_URL = 'https://directus.zigma99.com';

export const API_ENDPOINTS = {
  news: `${DIRECTUS_URL}/items/news`,
  partners: `${DIRECTUS_URL}/items/partners`,
  roleCategories: `${DIRECTUS_URL}/items/role_category`,
  teamMembers: `${DIRECTUS_URL}/items/team_members`,
};

export interface Partner {
  id: string;
  name: string;
  logo: string;
  website_url: string;
  status: string;
  sort: number;
}

export interface PartnersResponse {
  data: Partner[];
}

export interface RoleCategory {
  id: string;
  status: string;
  sort: number | null;
  category: string;
}

export interface RoleCategoriesResponse {
  data: RoleCategory[];
}

export interface TeamMember {
  id: string;
  status: string;
  sort: number | null;
  name: string;
  job_title: string;
  profile_photo: string | null;
  bio: string;
  linkedin_url: string | null;
  facebook_url: string | null;
  instagram_url: string | null;
  twitter_url: string | null;
  category_id: string;
}

export interface TeamMembersResponse {
  data: TeamMember[];
}

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

export async function fetchPartners(): Promise<PartnersResponse> {
  const res = await fetch(`${API_ENDPOINTS.partners}?sort=sort`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch partners');
  }

  return res.json();
}

export async function fetchRoleCategories(): Promise<RoleCategoriesResponse> {
  const res = await fetch(`${API_ENDPOINTS.roleCategories}?filter[status][_eq]=published`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch role categories');
  }

  return res.json();
}

export async function fetchTeamMembers(): Promise<TeamMembersResponse> {
  const res = await fetch(`${API_ENDPOINTS.teamMembers}?filter[status][_eq]=published`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch team members');
  }

  return res.json();
}
