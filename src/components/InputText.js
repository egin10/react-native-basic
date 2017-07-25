import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class InputText extends Component {
  constructor(props) {
    super(props);
        this.state = { 
            text: "" ,
            pass: "" 
        };

        this.onsubmit = this.onsubmit.bind(this);
    }

  onsubmit() {
      this.setState({text: ''})
      this.setState({pass: ''})
      alert(`Username : ${this.state.text} and Password : ${this.state.pass}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.textContent}>Username</Text>
          <TextInput
            style={styles.textIn}
            value={this.state.text}
            autoCapitalize={"none"}
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={styles.textContent}>Password</Text>
          <TextInput
            style={styles.textIn}
            value={this.state.pass}
            secureTextEntry={true}
            autoCapitalize={"none"}
            onChangeText={(pass) => this.setState({pass})}
          />

          <TouchableOpacity onPress={this.onsubmit} style={styles.button}>
            <Text style={styles.textButton}>Submit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.textFooter}>©2017 egin10</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50"
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textContent: {
    marginTop: 5,
    fontSize: 20,
    color: "white"
  },
  footer: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  textFooter: {
    color: "white",
    fontSize: 12
  },
  textIn: {
    marginTop: 10,
    height: 40,
    width: 200,
    backgroundColor: "#ffff",
    borderRadius: 4
  },
  button: {
    backgroundColor: "#1e90ff",
    marginTop: 50,
    width: 100,
    padding: 10,
    alignItems: "center",
    borderRadius: 4
  },
  textButton: {
    color: "white",
    fontSize: 15
  }
});
