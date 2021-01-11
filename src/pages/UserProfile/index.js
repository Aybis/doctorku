import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ILPhoto} from '../../assets';
import {Header, List, Profile} from '../../components';
import {colors, getData} from '../../utils';

const UserProfile = ({navigation}) => {
  const [profile, setprofile] = useState({
    fullName: '',
    email: '',
    photo: ILPhoto,
  });

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      setprofile(res);
    });
  });
  return (
    <View style={styles.page}>
      <ScrollView>
        <Header title={'Profile'} onPress={() => navigation.goBack()} />
        {profile.fullName.length > 0 && (
          <Profile
            name={profile.fullName}
            email={profile.email}
            photo={profile.photo}
          />
        )}
        <View style={styles.menu}>
          <List
            title="Edit Profile"
            desc="Last Update Yesterday"
            icon="account"
            onPress={() => navigation.navigate('EditProfile')}
          />
          <List
            title="Language"
            desc="Available 20 Languages"
            icon="language"
          />
          <List title="Give Us Rate" desc="On Google Play store" icon="rate" />
          <List title="Help Centre" desc="Read our guidlines" icon="help" />
        </View>
      </ScrollView>
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
    marginTop: 20,
    marginBottom: 60,
  },
});
