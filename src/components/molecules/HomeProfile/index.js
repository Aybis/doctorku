import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILPhoto} from '../../../assets';
import {colors, fonts, getData} from '../../../utils';
import {Button} from '../../atoms';

const HomeProfile = ({userProfile}) => {
  const [profile, setprofile] = useState({
    photo: ILPhoto,
    fullName: '',
    email: '',
  });

  // get data from local storage
  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      setprofile(data);
      console.log('im home');
    });
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={userProfile}>
        <Image style={styles.avatar} source={profile.photo} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.name}>Hi, {profile.fullName}</Text>
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
