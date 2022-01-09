import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

const images = [
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
];

const cabecera = () => {
  return (
    <View style={styles.cabecera}>
      <View>
        <Image
          style={styles.foto}
          source={{
            uri: 'https://instagram.fvlc4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/119116900_379896996500035_7500966296060945182_n.jpg?_nc_ht=instagram.fvlc4-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=qDDBCOsKe5AAX9m9CVh&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-CmjAv_VWiyIOmb1xxmy4Dbg8e-BBUCelcaKtm2xhjaA&oe=61E181D6&_nc_sid=7bff83',
            width: 110,
            height: 110,
          }}
        />
      </View>
      <View style={styles.section1}>
        <View style={styles.section2}>
          <Text>Post</Text>
          <Text>Followers</Text>
          <Text>following</Text>
        </View>
        <View style={styles.section2}>
          <Text>20</Text>
          <Text>110304</Text>
          <Text>1103</Text>
        </View>
        <View style={styles.section2}>
        <Text style={styles.boton}>Edit profile</Text>
        </View>
      </View>
    </View>
  );
};

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.container}>{cabecera()}</View>
          <View style={styles.section3}>
            {images.map((item, pos) => {
              return (
                <Image
                  style={styles.section3}
                  source={{
                    uri: item,
                    width: 90,
                    height: 90,
                  }}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: 'pink',
  },
  section1: {
    width: 200,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'stretch',
    marginTop:40,
  },
  section2: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  section3: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 5,
    flexWrap: 'wrap',
    marginTop:10,
  },
  boton: {
    marginTop:5,
    backgroundColor: 'grey',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal:30,
  },
  cabecera: {
    marginTop:20,
    flex: 0.4,
    flexDirection: 'row',
  },
  foto:{
   borderRadius: 400/2,
   margin:20,
  },
});
