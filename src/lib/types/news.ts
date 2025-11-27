export interface NewsItem {
  id: string;
  status: string;
  sort: number | null;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  title: string;
  summary: string;
  content: string;
  slug: string;
  seo_title: string;
  seo_desc: string;
  image: string;
  publication_date: string;
  news_category: string;
}

export interface NewsCategory {
  id: string;
  status: string;
  sort: number | null;
  news_category: string;
}

export interface NewsCategoriesResponse {
  data: NewsCategory[];
}

export interface NewsResponse {
  data: NewsItem[];
}
