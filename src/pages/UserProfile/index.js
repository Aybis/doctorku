import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ILPhoto } from '../../assets';
import { Header, List, Profile } from '../../components';
import { Firebase } from '../../config';
import {
  colors,
  getData,
  showError,
  showSuccess,
  storeData,
} from '../../utils';

const UserProfile = ({ navigation }) => {
  const [profile, setprofile] = useState({
    photo: ILPhoto,
    fullName: '',
    email: '',
    type: '',
  });

  // get data from local storage
  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = { uri: res.photo };
      setprofile(data);
    });
  }, [profile.uid]);

  const signOut = () => {
    Firebase.auth()
      .signOut()
      .then((res) => {
        setTimeout(() => {
          storeData('user', null);
          showSuccess('Sign Out Success');
        }, 1000);

        navigation.replace('GetStarted');
      })
      .catch((err) => {
        showError(err.code, err.message);
      });
  };

  const RedirectEditProfile = (type) => {
    if (type === 'doctor') {
      navigation.navigate('EditProfileDoctor');
    }
    if (type === 'user') {
      navigation.navigate('EditProfile');
    }
  };
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
            onPress={() => RedirectEditProfile(profile.type)}
          />
          <List
            title="Language"
            desc="Available 20 Languages"
            icon="language"
          />
          <List title="Give Us Rate" desc="On Google Play store" icon="rate" />
          <List
            title="Sign Out"
            desc="Read our guidlines"
            icon="help"
            onPress={signOut}
          />
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
