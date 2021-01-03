import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const IsMe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.chat}>
          Ibu Dokter, apakah memakan jeruk beserta kulitnya tiap hari itu buruk
          untuk kesehatan?
        </Text>
      </View>
      <Text style={styles.date}>9.20 AM</Text>
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
    maxWidth: '70%',
    borderRadius: 8,
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.card.light,
    borderBottomRightRadius: 0,
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
