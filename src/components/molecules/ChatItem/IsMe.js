import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const IsMe = ({ text, date }) => {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.chat}>{text}</Text>
      </View>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  chatContent: {
    maxWidth: '80%',
    borderRadius: 8,
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.card.light,
    borderBottomRightRadius: 0,
    marginRight: 10,
  },
  chat: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
