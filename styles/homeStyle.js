import { StyleSheet } from 'react-native';

const homeStyle = StyleSheet.create({
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
    alignItems: 'center',
  },
  touchOpacity: {
    marginTop: 10, 
    backgroundColor: '#ffffff', 
    borderRadius: 5,
    width: 200,
    alignItems: 'center'
  },
  footer:{
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textFooter: {
    color: 'white',
    fontSize: 12
  }
})

export default homeStyle;