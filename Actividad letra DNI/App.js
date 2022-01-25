import React,  {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Calculator from './components/calculator';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Calculator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:400,
    height:400,
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
