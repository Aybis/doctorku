import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Card = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: colors.primary,
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontFamily: fonts.primary[700],
    textAlign: 'center',
  },
});
