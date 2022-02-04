import { Center } from 'native-base';
import React,{Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Calculo from './components/Calculo';

const App = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.titulo}>Calculadora IMC</Text>
      <Calculo/>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex:1,
    paddingHorizontal: 24,
    backgroundColor:'purple',
    borderColor: 'black',
    borderWidth: 3,
  },
  titulo:{
    fontSize:20,
    color: "red",
    padding:20,
    fontWeight:"bold",
    textAlign: "center",
  },
});

export default App;
