import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {DUHospital} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Rating} from '../../atoms';

const cardHospital = () => {
  return (
    <View style={styles.card}>
      <View style={styles.inner}>
        <Image source={DUHospital} style={styles.image} />
        <Text style={styles.name}>Siloam International Karawaci</Text>
        <Rating rating={5} />
        <Text style={styles.address}>
          Jl. Siloam No.6, Bencongan, Kelapa Dua, Tangerang, Banten 15811
        </Text>
      </View>
    </View>
  );
};

export default cardHospital;
const windowWith = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    width: (windowWith - 40) / 2 - 10,
    height: (windowHeight - 20) / 3.4,
    marginHorizontal: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
  },
  image: {
    borderRadius: 10,
    width: (windowWith - 40) / 2 - 30,
    height: (windowHeight - 20) / 4 - 50,
    marginVertical: 5,
  },
  name: {
    fontSize: 14,
    fontFamily: fonts.primary[700],
    textAlign: 'center',
    marginBottom: 5,
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[200],
    color: colors.text.default,
    textAlign: 'center',
    marginTop: 5,
  },
});
