import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {DUHospital} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Rating} from '../../atoms';

const RatedHospitals = ({name, address, rating}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={DUHospital} />
      <Text style={styles.name}>{name}</Text>
      <Rating rating={rating} />
      <Text style={styles.address}>
        Jl. Siloam No.6, Bencongan, Kelapa Dua, Tangerang, Banten 15811
      </Text>
    </TouchableOpacity>
  );
};

export default RatedHospitals;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
    marginRight: 40,
    marginLeft: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: 300,
    height: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 5,
  },
  name: {
    width: 180,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.primary[700],
    marginBottom: 5,
  },
  rating: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  address: {
    width: 240,
    fontSize: 12,
    textAlign: 'center',
    fontFamily: fonts.primary[300],
    marginTop: 5,
    marginBottom: 10,
  },
});
