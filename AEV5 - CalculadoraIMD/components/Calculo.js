import React, {useState} from 'react';
import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Input, Item, Center, NativeBaseProvider, Button} from 'native-base';
import Resultado from './Resultado';

export default class Calculo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {peso: 0, altura: 0, calculo: 0};
    this.clickCalcIMC = this.clickCalcIMC.bind(this);
    this.handlePes = this.handlePes.bind(this);
    this.handleAlt = this.handleAlt.bind(this);
  }

  handlePes = number => {
    this.setState({peso: number})
  };
  handleAlt = number => {
    this.setState({altura: number})
  };

  /* clickCalcIMC() {
    Alert.alert('estoy aqui dentro');
    let cantidad = (this.state.peso/(this.state.altura*this.state.altura)).toFixed(2);
    this.setState({calculo: cantidad});
  } */

  clickCalcIMC = () => {
    this.setState({calculo: (this.state.peso/(this.state.altura*this.state.altura)).toFixed(2)})}
  

  render() {
    return (
      <NativeBaseProvider style={styles.Container}>
        <View style={styles.Container}>
          <Text style={styles.titulo}>Calculadora IMC</Text>
          <Text style={styles.font}>PESO</Text>
          <Input
            placeholder="peso"
            type='number'
            keyboardType='numeric'
            height={10}
            width={40}
            background={'white'}
            onChangeText={this.handlePes} 
          />
          <Text style={styles.font}>ALTURA</Text>
          <Input
            placeholder="altura en metros"
            type='number'
            keyboardType='numeric'
            height={10}
            width={40}
            background={'white'}
            onChangeText={this.handleAlt}
          />
          <Button
            onPress={this.clickCalcIMC}
            width={110}
            height={50}
            marginTop={30}>
            Calcular IMG
          </Button>
          <Text>{(this.state.calculo>0)?<Resultado resultado={this.state.calculo} />:''}</Text>
                   
        </View>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  titulo: {
    textAlign: 'center',
    height: 40,
    color: 'white',
    fontSize: 22,
    marginBottom: 20,
    marginTop: 50,
  },
  font: {
    height: 40,
    color: 'yellow',
    fontSize: 16,
    marginTop: 10,
  },
});
