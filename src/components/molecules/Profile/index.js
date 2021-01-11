import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICRemvoe} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({email, name, photo, desc, isRemove, onPress}) => {
  return (
    <View style={styles.container}>
      {!isRemove && (
        <View style={styles.borderProfile}>
          <Image source={photo} style={styles.avatar} />
        </View>
      )}
      {isRemove && (
        <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
          <Image source={photo} style={styles.avatar} />
          <ICRemvoe style={styles.iconRemove} />
        </TouchableOpacity>
      )}
      {name && (
        <View style={styles.textWrap}>
          <Text style={styles.name}> {name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      )}
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
    marginBottom: 10,
  },
  iconRemove: {
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
  avatar: {
    borderRadius: 10,
    height: windowHeight * 0.3,
    width: windowWith * 0.55,
  },
  textWrap: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    textTransform: 'capitalize',
  },
  email: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textTransform: 'lowercase',
  },
});
