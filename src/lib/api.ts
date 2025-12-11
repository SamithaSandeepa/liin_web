import { NewsResponse } from "./types/news";

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;

export const API_ENDPOINTS = {
  news: `${DIRECTUS_URL}/items/news`,
  newsCategories: `${DIRECTUS_URL}/items/news_categories`,
  partners: `${DIRECTUS_URL}/items/partners`,
  partnerCategories: `${DIRECTUS_URL}/items/partner_categories`,
  roleCategories: `${DIRECTUS_URL}/items/team_member_categories`,
  teamMembers: `${DIRECTUS_URL}/items/team_members`,
  testimonials: `${DIRECTUS_URL}/items/testimonials`,
  advertisements: `${DIRECTUS_URL}/items/advertisement_popups`,
  mainBanners: `${DIRECTUS_URL}/items/main_banners`,
};

export interface MainBanner {
  id: string;
  background_video: string;
  button_text: string | null;
  button_url: string | null;
  status: string;
  is_enabled: string;
}

export interface MainBannerResponse {
  data: MainBanner;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  website_url: string;
  status: string;
  sort: number;
  partner_category: string | null;
}

export interface PartnerCategory {
  id: string;
  status: string;
  sort: number | null;
  partner_category: string;
}

export interface PartnerCategoriesResponse {
  data: PartnerCategory[];
}

export interface PartnersResponse {
  data: Partner[];
}

export interface RoleCategory {
  id: string;
  status: string;
  sort: number | null;
  team_member_category: string;
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
  team_member_category: string;
}

export interface TeamMembersResponse {
  data: TeamMember[];
}

export interface Testimonial {
  id: string;
  status: string;
  sort: number | null;
  youtube_url: string;
}

export interface TestimonialsResponse {
  data: Testimonial[];
}

export interface Advertisement {
  id: number;
  status: string;
  sort: number | null;
  title: string;
  content: string;
  button_text: string;
  button_url: string;
  display_frequency: "always" | "once_per_day" | "once_per_session";
  start_date: string;
  end_date: string;
  image: string;
}

export interface AdvertisementResponse {
  data: Advertisement[];
}

export function getAssetUrl(assetId: string): string {
  return `${DIRECTUS_URL}/assets/${assetId}`;
}


/**
 * Fixes image URLs in Directus WYSIWYG content
 * Routes images through Next.js proxy to avoid CORS issues
 */
export function fixDirectusHtmlImages(html: string): string {
  if (!html) return html;

  // Decode ALL HTML entities in URLs (not just &amp;)
  html = html.replace(/&amp;/g, "&");
  html = html.replace(/&quot;/g, '"');
  html = html.replace(/&#39;/g, "'");
  html = html.replace(/&lt;/g, "<");
  html = html.replace(/&gt;/g, ">");

  // Replace relative asset paths with full Directus URL first
  html = html.replace(/src="\/assets\//g, `src="${DIRECTUS_URL}/assets/`);
  html = html.replace(/src='\/assets\//g, `src='${DIRECTUS_URL}/assets/`);

  // Now proxy all Directus image URLs through Next.js API route
  const directusUrlPattern = new RegExp(`src=["']${DIRECTUS_URL}/assets/([^"']+)["']`, 'g');
  html = html.replace(directusUrlPattern, (match, assetPath) => {
    const fullUrl = `${DIRECTUS_URL}/assets/${assetPath}`;
    const encodedUrl = encodeURIComponent(fullUrl);
    return `src="/api/image-proxy?url=${encodedUrl}"`;
  });

  // Add lazy loading and responsive styling
  html = html.replace(
    /<img /g,
    '<img loading="lazy" style="max-width: 100%; height: auto; border-radius: 0.5rem;" '
  );

  return html;
}

export async function fetchNews(): Promise<NewsResponse> {
  const res = await fetch(API_ENDPOINTS.news, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  return res.json();
}

export async function fetchNewsBySlug(slug: string): Promise<NewsResponse> {
  const res = await fetch(`${API_ENDPOINTS.news}?filter[slug][_eq]=${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch news item");
  }

  return res.json();
}

export async function fetchPartners(): Promise<PartnersResponse> {
  const res = await fetch(`${API_ENDPOINTS.partners}?sort=sort`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch partners");
  }

  return res.json();
}

export async function fetchPartnerCategories(): Promise<PartnerCategoriesResponse> {
  const res = await fetch(
    `${API_ENDPOINTS.partnerCategories}?filter[status][_eq]=published`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch partner categories");
  }

  return res.json();
}

export async function fetchNewsCategories(): Promise<any> {
  const res = await fetch(
    `${API_ENDPOINTS.newsCategories}?filter[status][_eq]=published&sort=sort`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news categories");
  }

  return res.json();
}

export async function fetchRoleCategories(): Promise<RoleCategoriesResponse> {
  const res = await fetch(
    `${API_ENDPOINTS.roleCategories}?filter[status][_eq]=published`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch role categories");
  }

  return res.json();
}

export async function fetchTeamMembers(): Promise<TeamMembersResponse> {
  const res = await fetch(
    `${API_ENDPOINTS.teamMembers}?filter[status][_eq]=published`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch team members");
  }

  return res.json();
}

export async function fetchTestimonials(): Promise<TestimonialsResponse> {
  const res = await fetch(
    `${API_ENDPOINTS.testimonials}?filter[status][_eq]=published`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch testimonials");
  }

  return res.json();
}

/**
 * Fetch active advertisements from Directus API
 */
export async function fetchAdvertisements(): Promise<Advertisement[]> {
  try {
    const response = await fetch(
      `${API_ENDPOINTS.advertisements}?filter[status][_eq]=published`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      return [];
    }

    const result: AdvertisementResponse = await response.json();
    
    // Filter active advertisements based on date range (using UTC)
    const now = new Date();
    const activeAds = result.data.filter((ad) => {
      const startDate = new Date(ad.start_date);
      const endDate = new Date(ad.end_date);

      // Compare timestamps to handle timezone differences
      return now.getTime() >= startDate.getTime() && now.getTime() <= endDate.getTime();
    });

    return activeAds;
  } catch (error) {
    return [];
  }
}

/**
 * Fetch main banner for Hero section
 */
export async function fetchMainBanner(): Promise<MainBanner | null> {
  try {
    // Fetch the single object directly if it's a singleton, or handles strict single response
    const res = await fetch(`${API_ENDPOINTS.mainBanners}?filter[status][_eq]=published&limit=1`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("Failed to fetch main banner");
      return null;
    }

    const json = await res.json();
    // Directus sometimes returns an array for collection items even with limit=1, 
    // but the user showed "data": { ...object } which suggests singleton or specific ID fetch. 
    // However, usually /items/collection returns data: [...]. 
    // If the user's snippet is correct as a response from /items/main_banners (plural), 
    // it implies it might be a singleton collection in Directus.
    // We will handle both array (take first) and object cases to be safe.
    
    if (Array.isArray(json.data)) {
        return json.data[0] || null;
    }
    return json.data || null;
  } catch (error) {
    console.error("Error fetching main banner:", error);
    return null;
  }
}

/**
 * Check if advertisement should be displayed based on frequency
 */
export function shouldDisplayAd(
  adId: number,
  frequency: Advertisement["display_frequency"]
): boolean {
  if (typeof window === "undefined") return true;

  if (frequency === "always") {
    return true;
  }

  const storageKey = `ad_displayed_${adId}`;
  const lastDisplayed = localStorage.getItem(storageKey);

  if (!lastDisplayed) {
    return true;
  }

  if (frequency === "once_per_session") {
    return false;
  }

  if (frequency === "once_per_day") {
    const lastDisplayedDate = new Date(lastDisplayed);
    const now = new Date();
    
    return (
      lastDisplayedDate.getDate() !== now.getDate() ||
      lastDisplayedDate.getMonth() !== now.getMonth() ||
      lastDisplayedDate.getFullYear() !== now.getFullYear()
    );
  }

  return true;
}

/**
 * Mark advertisement as displayed
 */
export function markAdAsDisplayed(adId: number): void {
  if (typeof window === "undefined") return;

  const storageKey = `ad_displayed_${adId}`;
  localStorage.setItem(storageKey, new Date().toISOString());
}
