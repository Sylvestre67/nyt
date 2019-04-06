import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { connect, Dispatch } from "react-redux";
import { IappStore } from "../store/reducers";

// See: https://medium.com/knerd/typescript-tips-series-proper-typing-of-react-redux-connected-components-eda058b6727d

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export interface OwnProps {
  // propFromParent: number;
}

interface StateProps {
  // propFromReduxStore: string;
}

interface DispatchProps {
  // onSomeEvent: () => void;
}

type Props = StateProps & DispatchProps & OwnProps;

interface State {}

class HomeScreen extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

const mapStateToProps = (state: IappStore, ownProps: OwnProps): StateProps => {
  return {
    articles: state.articles
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    // onTodoClick: id => {
    //   dispatch();
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
