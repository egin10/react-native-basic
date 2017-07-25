import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class Home extends Component {
    state = {
        alertText: 'KiwKiwKiw',
        uri: 'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png'
      }
        
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image 
            source={{ uri: this.state.uri}} 
            style={styles.image}
           />

          <TouchableOpacity onPress={ ()=>{alert(this.state.alertText)} } style={{paddingTop: 10}}>
            <Text style={styles.textContent}>Let's Start!</Text>
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
  container : {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContent: {
    fontSize: 30,
    color: 'green'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer:{
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a9a9a9'
  },
  textFooter: {
    color: 'white',
    fontSize: 12
  }
})