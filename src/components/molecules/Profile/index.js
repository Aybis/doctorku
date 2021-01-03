import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {DUProfileDoctor2} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({email, name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={DUProfileDoctor2} style={styles.avatar} />
      </View>
      <Text style={styles.name}> {name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};

export default Profile;
const windowWith = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderProfile: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    borderColor: colors.border,
    marginBottom: 20,
  },
  avatar: {
    borderRadius: 10,
    height: windowHeight * 0.33,
    width: windowWith * 0.6,
  },
  name: {
    fontSize: 22,
    fontFamily: fonts.primary[600],
  },
  email: {
    fontSize: 18,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
