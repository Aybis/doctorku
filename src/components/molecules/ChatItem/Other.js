import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DUProfileDoctor} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Other = () => {
  return (
    <View style={styles.container}>
      <Image source={DUProfileDoctor} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.chat}>
            Oh tentu saja tidak, karena kulit jeruk itu mengandung sari dan
            vitamin yang bagus untuk tubuh jadi bagus untuk tubuh :)
          </Text>
        </View>
        <Text style={styles.date}>9.20 AM</Text>
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
    paddingLeft: 16,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30/2,
    marginRight: 12,
  },
  chatContent: {
    maxWidth: '80%',
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
