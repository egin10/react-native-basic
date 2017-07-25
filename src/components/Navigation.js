import React from "react";
import { View, StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation";
import Expo from "expo";

import Home from "./Home";
import About from "./About";

const routes = {
  Home: {
    name: "Home",
    screen: Home
  },
  About: {
    name: "About",
    screen: About
  }
};

const MainApp = StackNavigator(routes);

export default class Navigation extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainApp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
