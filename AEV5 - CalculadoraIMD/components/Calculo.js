import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input, NativeBaseProvider, Button} from 'native-base';
import Resultado2 from './Resultado2';

export default class Calculo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {peso: 0, altura: 0, calculo: 0};
    this.clickCalcIMC = this.clickCalcIMC.bind(this);
    this.handlePes = this.handlePes.bind(this);
    this.handleAlt = this.handleAlt.bind(this);
  }

  handlePes = number => {
    this.setState({peso: number});
  };
  handleAlt = number => {
    this.setState({altura: number});
  };

  /* clickCalcIMC() {
    Alert.alert('estoy aqui dentro');
    let cantidad = (this.state.peso/(this.state.altura*this.state.altura)).toFixed(2);
    this.setState({calculo: cantidad});
  } */

  clickCalcIMC = () => {
    let cantidad = this.state.peso/(this.state.altura*this.state.altura);
    this.setState({calculo: cantidad.toFixed(2)});
  };

  render() {
    return (
      <NativeBaseProvider>
        <View style={styles.Container}>
        <Text style={styles.titulo}>  Datos</Text>
          <Text style={styles.font}>PESO</Text>
          <Input
            placeholder="peso"
            type='number'
            keyboardType='numeric'
            height={10}
            width={40}
            marginTop={-3}
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
            marginTop={-3}
            background={'white'}
            onChangeText={this.handleAlt}
          />
          <Button
            onPress={this.clickCalcIMC}
            width={110}
            height={50}
            marginTop={5}>
            Calcular IMG
          </Button>
          <Text>
          {this.state.calculo>0?<Resultado2 resultado={this.state.calculo}/>:'Tipo de peso'}
          </Text>
         {/**<Text>{this.state.calculo}</Text>**/}             
        </View>
        <View style={styles.sign}>
        <Text>Created for Ivan 2n DAM</Text>
        </View>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    height:340,
    paddingHorizontal: 24,
    paddingBottom:40,
    backgroundColor: "white",
  },
  sign: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: "purple",
  },
  titulo: {
    textAlign: 'left',
    height: 40,
    color: 'red',
    fontSize: 22,
  },
  font: {
    marginTop: 5,
    height: 40,
    color: 'blue',
    fontSize: 14,
  },
});
