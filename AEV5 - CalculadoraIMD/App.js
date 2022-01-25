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
      <Calculo/>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex:1,
    paddingHorizontal: 24,
    backgroundColor:'pink',
    borderColor: 'black',
    borderWidth: 3,
  },
});

export default App;
