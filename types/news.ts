export interface NewsBase {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  summary: string;
  publishedAt: string;
}

export interface NewsHeadlines extends NewsBase {
  imageUrl: string;
}

export interface NewsOthers extends NewsBase {}

export interface NewsArticle extends NewsBase {
  content: string;
  author: string;
  imageUrl: string;
  isHeadline: boolean;
}
