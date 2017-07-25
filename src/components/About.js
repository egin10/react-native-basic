import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class About extends Component {
    state = {
        title: 'About',
        text: 'This is my first android application. This application is powered by React-Native.'
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>    
                    <Text style={styles.textContent}>{this.state.title}</Text>
                    <Text style={styles.text}>{this.state.text}</Text>
                </View>

                <View style={styles.footer}>
                    <Text style={{color: 'white'}}>egin10</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContent: {
        color: 'white',
        fontSize: 30
    },
    text: {
        textAlign: 'center',
        fontSize: 15,
        color: 'white'
    },
    footer: {
        alignItems: 'center',
        marginBottom: 10
    }
});