import {
  fetchArticle,
  fetchArticleReceived,
  FETCH_ARTICLE_REQUESTED,
  FETCH_ARTICLE_RECEIVED
} from "./actions";

describe("fetchArticle", () => {
  it("should create an action with the given category", () => {
    const action = fetchArticle({ category: "testing" });
    expect(action).toEqual({
      type: FETCH_ARTICLE_REQUESTED,
      payload: { category: "testing" }
    });
  });
});

describe("fetchArticleReceived", () => {
  it("should create an action with the given articles", () => {
    const action = fetchArticleReceived({ articles: [] });
    expect(action).toEqual({
      type: FETCH_ARTICLE_RECEIVED,
      payload: { articles: [] }
    });
  });
});
