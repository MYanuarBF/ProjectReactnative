import React,{Component} from 'react';
import {Text,StyleSheet,Image,TextInput,View,TouchableOpacity} from 'react-native';

export default class Login extends Component{
  render(){
    return(
      <View style={style.container}>
      <Image source={require('../image/logo.png')} style={{width: 40, height: 40}} />
        <TextInput style={style.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="E-mail" 
                placeholderTextColor='#ffffff'/>
        <TextInput style={style.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Password" 
                placeholderTextColor='#ffffff'/>

        <TouchableOpacity style={style.button}>
          <Text style={style.buttonText}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
} 

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#554a64'
  },
  inputBox: {
      width: 300,
      backgroundColor: 'rgba(255,255,255,0.3)',
      borderRadius:25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#ffffff',
      marginVertical:10
  },
  button: {
    width: 300,
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 14
  },
  buttonText: {
    fontSize:16,
    fontWeight: '500',
    color:'#ffffff',
    textAlign:'center'
  }
})