/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { connect, Provider } from "react-redux";

import { getTime, getQuote } from "./actions";
import createStore from "./store";
import { ApplicationState, ThunkDispatch } from "./types";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

interface StateProps {
  currentTime: Date | null;
  dailyQuote: string | null;
  weather: string | null;
  error: string | null;
}

interface DispatchProps {
  getTime: () => void;
  getQuote: () => void;
}

type Props = StateProps & DispatchProps;

class App extends Component<Props> {
  render() {
    const {
      currentTime,
      dailyQuote,
      weather,
      error,
      getQuote,
      getTime
    } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={getTime}>
            <Text style={styles.buttonText}>Get time</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={getQuote}>
            <Text style={styles.buttonText}>Get quote and weather</Text>
          </TouchableOpacity>
        </View>
        {error && <Text style={styles.error}>{error}</Text>}
        {currentTime && (
          <Text style={styles.welcome}>{currentTime.toTimeString()}</Text>
        )}
        {dailyQuote && <Text style={styles.welcome}>{dailyQuote}</Text>}
        {weather && <Text style={styles.welcome}>{weather}</Text>}
      </View>
    );
  }
}
const ConnectedApp = connect(
  (state: ApplicationState): StateProps => ({
    currentTime: state.currentTime,
    dailyQuote: state.dailyQuote,
    weather: state.weather,
    error: state.error
  }),
  (dispatch: ThunkDispatch): DispatchProps => ({
    getTime: () => dispatch(getTime()),
    getQuote: () => dispatch(getQuote())
  })
)(App);

const makeApp = () => {
  const store = createStore();

  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
};
export default makeApp;

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
  error: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "red"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  buttons: {
    flexDirection: "row",
    margin: 40
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    margin: 5,
    borderRadius: 3
  },
  buttonText: {
    color: "white"
  }
});
