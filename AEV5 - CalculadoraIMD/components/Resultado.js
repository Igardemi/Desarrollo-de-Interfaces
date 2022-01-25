import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Resultado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {colorText: 'white', tipo: 'tipo de peso', import:this.props.resultado};
    //this.clasificacion = this.clasificacion.bind(this);
  }
  componentDidMount() {
    if (this.state.import < 18.5) {
      this.setState({tipo: 'Peso Insuficiente', colorText: 'green'});
    } else if (this.state.import >= 18.5 && this.state.import <= 24.9) {
      this.setState({tipo: 'Normopeso', colorText: 'green'});
    } else if (this.state.import >= 25 && this.state.import <= 26.9) {
      this.setState({tipo: 'Sobrepeso grado I', colorText: 'green'});
    } else if (this.state.import >= 27 && this.state.import <= 29.9) {
      this.setState({tipo: 'Sobrepeso grado II (preobesidad)', colorText: 'orange'});
    } else if (this.state.import >= 30 && this.state.import <= 34.9) {
      this.setState({tipo: 'Obesidad de tipo I', colorText: 'orange'});
    } else if (this.state.import >= 35 && this.state.import <= 39.9) {
      this.setState({tipo: 'Obesidad de tipo II', colorText: 'orange'});
    } else if (this.state.import >= 40 && this.state.import <= 49.9) {
      this.setState({tipo: 'Obesidad de tipo III (mórbida)', colorText: 'red'});
    } else {
      this.setState({tipo: 'Obesidad de tipo IV (extrema)', colorText: 'red'});
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.Container} style={{ color: this.state.colorText }}>{()=>this.clasificacion,this.state.tipo}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    textAlign: 'left',
    marginTop: 10,
    height: 25,
    width:300,
    fontWeight:'bold',
    fontSize:18,
  },
});
