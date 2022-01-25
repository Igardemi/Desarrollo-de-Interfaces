import React, {Component} from 'react';
import {Alert, TextInput, StyleSheet, Text, View} from 'react-native';

const letras = [
  'T',
  'R',
  'W',
  'A',
  'G',
  'M',
  'Y',
  'F',
  'P',
  'D',
  'X',
  'B',
  'N',
  'J',
  'Z',
  'S',
  'Q',
  'V',
  'H',
  'L',
  'C',
  'K',
  'E',
  'T',
];

const calculaLetranif = unDni => {
  let unDniEnter = parseInt(unDni);
  if (!isNaN(unDniEnter)) {
    let posicion = unDniEnter % 23;
    return letras[posicion];
  } else {
    return NaN;
  }
};

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: '',
      letra: '',
    };
  }

  /*  handleChanged = number => {
    this.setState({numero: number}, () => {
      if (numero.length === 8) {
        this.setState({letra: letras[numero % 23]});
      } else {
        this.setState({letra: ' '});
      }
    });
  }; */

  handleChanged = userDni => {
    //console.log('1dniV=' + this.state.numero);
    //this.setState({numero: userDni}); 
    //console.log('2dniV=' + this.state.numero);
    //console.log('2dniL=' + this.state.numero.length);

    this.setState({numero: userDni},  ()=>{if (userDni.length=== 8) {
      let letraCalculada = calculaLetranif(userDni);
      this.setState({letra: letraCalculada});
    } else {
      this.setState({letra: ''});
    }});
    
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Container}>Vamos a calcular la letra del dni.</Text>
        <TextInput
          underlineColorAndroid="blue"
          placeholder="Escribe tu dni:"
          keyboardType="numeric"
          editable
          maxLength={8}
          value={this.state.numero}
          onChangeText={this.handleChanged}></TextInput>
        <TextInput
          value={this.state.letra}
          underlineColorAndroid="blue"
          placeholder="Letra:"
          editable={false}></TextInput>
        <Text>La letra de este dni: {this.state.letra}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
