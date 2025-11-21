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
}

export interface NewsResponse {
  data: NewsItem[];
}
