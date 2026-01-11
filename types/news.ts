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

export interface NewsArticle extends NewsBase {
  content: string;
  author: string;
  imageUrl: string;
  isHeadline: boolean;
}

export type ApiResponse<T> = {
  success: boolean;
  count: number;
  data: T;
};
