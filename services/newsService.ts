import { NewsHeadlines, NewsArticle, NewsOthers } from "../types/news";

const BASE_URL = "https://api-teste-frontend-1.sevn.workers.dev/";

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    throw new Error(`error! status: ${res.status}`);
  }
  return res.json();
}

export async function getHeadlines(): Promise<NewsHeadlines[]> {
  const res = await fetch(`${BASE_URL}/news/headlines`);
  return handleResponse<NewsHeadlines[]>(res);
}

export async function getOthers(): Promise<NewsOthers[]> {
  const res = await fetch(`${BASE_URL}/news/others`);
  return handleResponse<NewsOthers[]>(res);
}

export async function getArticleById(id: string): Promise<NewsArticle | null> {
  const res = await fetch(`${BASE_URL}/news/article/${id}`);
  return handleResponse<NewsArticle | null>(res);
}
