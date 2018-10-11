import React, {Component} from 'react';
import {StyleSheet, Text, View, Image,} from 'react-native';
import Judul from './title';

export default class Biodata extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Judul type="Biodata"/>
        <Text style={styles.instructions}>Nama : M Yanuar Budi F</Text>
        <Text style={styles.instructions}>Kelas : XI RPL 1</Text>
        <Text style={styles.instructions}>Absen : 24</Text>
        <Image source={require('../image/pic.jpg')} 
         style={{width: 400, height: 400}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
