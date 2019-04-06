import { call, all, takeLatest } from "redux-saga/effects";
import Client from "../services/api";

function* fetchArticles() {
  const articles = yield call(Client.fetch, "/articles");
}

function* watchForArticlesFetch() {
  yield takeLatest("FETCH_ARTICLE_REQUESTED", fetchArticles);
}

export default function* rootSaga() {
  yield all([watchForArticlesFetch()]);
}
