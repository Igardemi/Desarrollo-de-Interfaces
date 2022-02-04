import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


const Resultado2 = (props) => {

       let numero = props.resultado
            if (numero <= 18.5) {
                return <Text style={styles.Container} style={{color: 'green'}}>Peso Insuficiente</Text>
            
            } else if (numero > 18.5 && numero <= 25) {
                return <Text style={styles.Container} style={{color: 'green'}}>Normopeso</Text>
            
            } else if (numero > 25 && numero <= 27) {
                return <Text style={styles.Container} style={{color: 'orange'}}>Sobrepeso grado I</Text>
    
            } else if (numero > 27 && numero <= 30) {
                return <Text style={styles.Container} style={{color: 'orange'}}>Sobrepeso grado II (preobesidad)</Text>
                            
            } else if (numero > 30 && numero <= 35) {
                return <Text style={styles.Container} style={{color: 'orange'}}>Obesidad de tipo I</Text>

            } else if (numero > 35 && numero <= 40) {
                return <Text style={styles.Container} style={{color: 'orange'}}>Obesidad de tipo II</Text>
       
            } else if (numero > 40 && numero <= 49.9) {
                return <Text style={styles.Container} style={{color: 'red'}}>Obesidad de tipo III (mórbida)</Text>

            } else {
                return <Text style={styles.Container} style={{color: 'red'}}>Obesidad de tipo IV (extrema)</Text>
            }
};

export default Resultado2;

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
