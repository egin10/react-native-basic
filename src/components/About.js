import React, { Component } from 'react';
import { View, Text } from 'react-native';
import aboutStyle from '../styles/aboutStyle';

export default class About extends Component {
    state = {
        title: 'About',
        text: 'This is my first android application.'
    }

    render() {
        return (
            <View style={aboutStyle.container}>
                <View style={aboutStyle.content}>    
                    <Text style={aboutStyle.textContent}>{this.state.title}</Text>
                    <Text style={aboutStyle.text}>{this.state.text}</Text>
                </View>

                <View style={aboutStyle.footer}>
                    <Text style={{color: 'white'}}>egin10</Text>
                </View>
            </View>
        );
    }
}
