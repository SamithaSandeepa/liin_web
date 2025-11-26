import { NewsResponse } from "./types/news";

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;

export const API_ENDPOINTS = {
  news: `${DIRECTUS_URL}/items/news`,
  partners: `${DIRECTUS_URL}/items/partners`,
  roleCategories: `${DIRECTUS_URL}/items/role_category`,
  teamMembers: `${DIRECTUS_URL}/items/team_members`,
  testimonials: `${DIRECTUS_URL}/items/testimonials`,
  advertisements: `${DIRECTUS_URL}/items/advertisement_popups`,
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
 * Keeps transformation parameters (width, height) for optimized loading
 */
export function fixDirectusHtmlImages(html: string): string {
  if (!html) return html;

  // Decode ALL HTML entities in URLs (not just &amp;)
  html = html.replace(/&amp;/g, "&");
  html = html.replace(/&quot;/g, '"');
  html = html.replace(/&#39;/g, "'");
  html = html.replace(/&lt;/g, "<");
  html = html.replace(/&gt;/g, ">");

  // Replace relative asset paths with full Directus URL
  html = html.replace(/src="\/assets\//g, `src="${DIRECTUS_URL}/assets/`);

  html = html.replace(/src='\/assets\//g, `src='${DIRECTUS_URL}/assets/`);

  // Add crossorigin attribute to fix CORS issues
  html = html.replace(
    /<img /g,
    '<img crossorigin="anonymous" loading="lazy" style="max-width: 100%; height: auto;" '
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
        cache: 'no-store', // Force fresh data in production
      }
    );

    if (!response.ok) {
      console.error(`Advertisement API failed: ${response.status} ${response.statusText}`);
      return [];
    }

    const result: AdvertisementResponse = await response.json();
    
    // Filter active advertisements based on date range
    const now = new Date();
    const activeAds = result.data.filter((ad) => {
      const startDate = new Date(ad.start_date);
      const endDate = new Date(ad.end_date);

      return now >= startDate && now <= endDate;
    });

    return activeAds;
  } catch (error) {
    console.error('Error fetching advertisements:', error);
    return [];
  }
}

/**
 * Check if advertisement should be displayed based on frequency
 */
export function shouldDisplayAd(
  adId: number,
  frequency: Advertisement["display_frequency"]
): boolean {
  if (typeof window === "undefined") {
    console.log(`🔍 shouldDisplayAd (server-side): Ad ${adId} - returning true`);
    return true;
  }

  console.log(`🔍 shouldDisplayAd: Checking ad ${adId} with frequency "${frequency}"`);

  if (frequency === "always") {
    console.log(`  ✅ Frequency is "always" - displaying`);
    return true;
  }

  const storageKey = `ad_displayed_${adId}`;
  const lastDisplayed = localStorage.getItem(storageKey);

  if (!lastDisplayed) {
    console.log(`  ✅ No display history - displaying for first time`);
    return true;
  }

  console.log(`  📅 Last displayed: ${lastDisplayed}`);

  if (frequency === "once_per_session") {
    // Already displayed in this session
    console.log(`  ❌ Frequency is "once_per_session" and already displayed`);
    return false;
  }

  if (frequency === "once_per_day") {
    const lastDisplayedDate = new Date(lastDisplayed);
    const now = new Date();
    
    const isDifferentDay = (
      lastDisplayedDate.getDate() !== now.getDate() ||
      lastDisplayedDate.getMonth() !== now.getMonth() ||
      lastDisplayedDate.getFullYear() !== now.getFullYear()
    );

    console.log(`  ${isDifferentDay ? '✅' : '❌'} Different day check:`, {
      lastDate: lastDisplayedDate.toDateString(),
      today: now.toDateString(),
      isDifferent: isDifferentDay,
    });

    // Check if it's a different day
    return isDifferentDay;
  }

  return true;
}

/**
 * Mark advertisement as displayed
 */
export function markAdAsDisplayed(adId: number): void {
  if (typeof window === "undefined") return;

  const storageKey = `ad_displayed_${adId}`;
  const timestamp = new Date().toISOString();
  localStorage.setItem(storageKey, timestamp);
  console.log(`💾 Marked ad ${adId} as displayed:`, timestamp);
}
