import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {DUAvatar} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Rating} from '../../atoms';

const RatedDoctors = ({name, hospital, rate}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.avatar} source={DUAvatar} />
      <Text style={styles.name}>Dr. {name}</Text>
      <Text style={styles.hospitals}>{hospital}</Text>
      <Rating rating={rate} />
    </TouchableOpacity>
  );
};

export default RatedDoctors;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignSelf: 'flex-start',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  avatar: {
    height: 85,
    width: 90,
    marginBottom: 8,
  },
  name: {
    fontSize: 12,
    fontFamily: fonts.primary[700],
  },
  hospitals: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginBottom: 5,
  },
});
