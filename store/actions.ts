import { action, IAction } from "./helpers";

export const FETCH_ARTICLE_REQUESTED = "FETCH_ARTICLE_REQUESTED";
export const FETCH_ARTICLE_RECEIVED = "FETCH_ARTICLE_RECEIVED";
export const FETCH_ARTICLE_FAILED = "FETCH_ARTICLE_FAILED";

export type fetchArticlePayload = {
  category: string;
};

export type fetchArticleReceivedPayload = {
  articles: [];
};

export type IFetchArticleAction = IAction<string, fetchArticlePayload>;

export function fetchArticle({
  category
}: fetchArticlePayload): IFetchArticleAction {
  return action(FETCH_ARTICLE_REQUESTED, { category });
}

export type IFetchArticleReceived = IAction<
  string,
  fetchArticleReceivedPayload
>;

export function fetchArticleReceived({
  articles
}: fetchArticleReceivedPayload): IFetchArticleReceived {
  return action(FETCH_ARTICLE_RECEIVED, { articles });
}
