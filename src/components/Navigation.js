import React from "react";
import { View, StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation";
import Expo from "expo";

import Home from "./Home";
import About from "./About";
import InputText from "./InputText";

const routes = {
  Home: {
    name: "Home",
    screen: Home,
    navigationOptions: {
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: "gainsboro"
      }
    }
  },
  About: {
    name: "About",
    screen: About,
    navigationOptions: {
      title: "About",
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: "gainsboro"
      }
    }
  },
  InputText: {
    name: "InputText",
    screen: InputText,
    navigationOptions: {
      title: "InputText",
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: "gainsboro"
      }
    }
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
    flex: 1
  }
});
