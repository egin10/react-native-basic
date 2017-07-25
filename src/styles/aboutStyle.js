import { StyleSheet } from 'react-native';

const aboutStyle = StyleSheet.create({
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
        alignItems: 'center',
        marginBottom: 10
    }
});

export default aboutStyle;