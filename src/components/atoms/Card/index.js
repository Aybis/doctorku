import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const Card = ({ title, type }) => {
  let firstWord = '';
  if (type === 'rs') {
    firstWord = 'RS.';
  }

  if (type === 'spesialis') {
    firstWord = 'Spesialis';
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${firstWord} ${title}`}</Text>
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
    textTransform: 'capitalize',
    fontFamily: fonts.primary[700],
    textAlign: 'center',
  },
});
