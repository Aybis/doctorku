import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Button } from '../../atoms';

const HomeProfile = ({ onPress, user }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.avatar} source={user.photo} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.name}>Hi, {user.fullName}</Text>
        <Button type="icon-only" icon="notification" />
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  header: {
    marginHorizontal: 10,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[700],
    textTransform: 'capitalize',
  },
});
