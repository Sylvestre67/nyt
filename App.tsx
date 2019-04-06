import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import appStore from "./store/reducers";
import rootSaga from "./store/sagas";

import HomeScreen from "./screens/HomeScreen";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(appStore, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(rootSaga);

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
  }
}
