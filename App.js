import React, {Component} from 'react';
import {StyleSheet, Text, View, Image,} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './components/Login';
import Biodata from './components/biodata';

const AppNavigator = StackNavigator({
  LoginScreen: { screen: Login },
  BiodataScreen: { screen: Biodata }
});

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
      );
    }
  }