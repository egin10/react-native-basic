import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class About extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>    
                    <Text style={styles.textContent}>About</Text>
                    <Text style={styles.text}>This is my first android application.</Text>
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
        backgroundColor: '#2c3e50',
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
        fontSize: 15,
        color: 'white'
    },
    footer: {
        alignItems: 'center'
    }
});
