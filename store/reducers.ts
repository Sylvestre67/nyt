import { combineReducers } from "redux";

import {
  FETCH_ARTICLE_REQUESTED,
  FETCH_ARTICLE_RECEIVED,
  FETCH_ARTICLE_FAILED,
  IFetchArticleAction,
  IFetchArticleReceived,
  fetchArticleReceivedPayload
} from "./actions";

type Actions = IFetchArticleAction | IFetchArticleReceived;

interface IArticleState {
  hasError: boolean;
  isLoading: boolean;
  list: [] | null;
}

const initialState: IArticleState = {
  hasError: false,
  isLoading: false,
  list: null
};

function articles(state = initialState, action: Actions): IArticleState {
  switch (action.type) {
    case FETCH_ARTICLE_REQUESTED: {
      return Object.assign({}, state, { isLoading: true });
    }
    case FETCH_ARTICLE_RECEIVED: {
      const { articles } = action.payload as fetchArticleReceivedPayload;
      return Object.assign({}, state, { isLoading: true, list: articles });
    }
    case FETCH_ARTICLE_FAILED: {
      return Object.assign({}, state, {
        isLoading: false,
        hasError: true,
        list: null
      });
    }
  }
  return state;
}

export interface IappStore {
  articles: IArticleState;
}

const appStore = combineReducers({ articles });

export default appStore;
