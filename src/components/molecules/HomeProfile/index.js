/* eslint-disable no-alert */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DUAvatar} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const HomeProfile = ({userProfile}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={userProfile}>
        <Image style={styles.avatar} source={DUAvatar} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.name}>Hi, Abdul Muchtar</Text>
        <Button
          type="icon-only"
          icon="notification"
          onPress={() => alert('Soon .....')}
        />
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
  },
});
