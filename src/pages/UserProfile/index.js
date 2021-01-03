import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, List, Profile} from '../../components';
import {colors} from '../../utils';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title={'Profile'} onPress={() => navigation.goBack()} />
      <Profile name="Abdul Muchtar Astria" email="muchtaras.30@gmail.com" />
      <View style={styles.menu}>
        <List
          title="Edit Profile"
          desc="Last Update Yesterday"
          icon="account"
        />
        <List title="Language" desc="Available 20 Languages" icon="language" />
        <List title="Give Us Rate" desc="On Google Play store" icon="rate" />
        <List title="Help Centre" desc="Read our guidlines" icon="help" />
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  menu: {
    marginBottom: 60,
  },
});
