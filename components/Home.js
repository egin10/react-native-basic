import React, {Component} from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import homeStyle from '../styles/homeStyle';

export default class Home extends Component {
    state = {
        alertText: 'KiwKiwKiw',
        uri: 'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png'
      }
        
  render() {
    return (
      <View style={homeStyle.container}>
        <View style={homeStyle.content}>
          <Image 
            source={{ uri: this.state.uri}} 
            style={homeStyle.image}
           />

          <TouchableOpacity 
            onPress={ ()=>{alert(this.state.alertText)} }
            style={homeStyle.touchOpacity}>
            <Text style={homeStyle.textContent}>Let's Start!</Text>
          </TouchableOpacity>
        </View>

        <View style={homeStyle.footer}>
          <Text style={homeStyle.textFooter}>©2017 egin10</Text>
        </View>        
      </View>
    );
  }
}