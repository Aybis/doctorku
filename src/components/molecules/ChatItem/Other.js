import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const Other = ({ avatar, text, date }) => {
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.chat}>{text}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    marginBottom: 20,
    flexDirection: 'row',
    paddingLeft: 12,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  chatContent: {
    maxWidth: '90%',
    borderRadius: 8,
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.secondary,
    borderBottomLeftRadius: 0,
  },
  chat: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.white,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
