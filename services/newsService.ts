import {
  NewsHeadlines,
  NewsArticle,
  NewsBase,
  ApiResponse,
} from "../types/news";

const BASE_URL = "https://api-teste-frontend-1.sevn.workers.dev";

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    throw new Error(`error! ${res.status}`);
  }
  return res.json();
}

export async function getHeadlines(): Promise<NewsHeadlines[]> {
  const res = await fetch(`${BASE_URL}/news/headlines`);
  const json = await handleResponse<ApiResponse<NewsHeadlines[]>>(res);
  return json.data;
}

export async function getOthers(): Promise<NewsBase[]> {
  const res = await fetch(`${BASE_URL}/news/others`);
  const json = await handleResponse<ApiResponse<NewsBase[]>>(res);
  return json.data;
}

export async function getArticleById(id: string): Promise<NewsArticle | null> {
  const res = await fetch(`${BASE_URL}/news/articles/${id}`);

  if (!res.ok) return null;

  const json = await res.json();
  return json.data;
}
