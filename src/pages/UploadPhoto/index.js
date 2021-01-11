import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICAdd, ICRemvoe, ILPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts, storeData} from '../../utils';
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {Firebase} from '../../config';

const UploadPhoto = ({navigation, route}) => {
  const {fullName, email, uid} = route.params;
  const [hasPhoto, sethasPhoto] = useState(false);
  const [photo, setphoto] = useState(ILPhoto);
  const [photoForDB, setphotoForDB] = useState('');

  const getImage = () => {
    // launchCamera for activate camera
    //launchImageLibrary for get image from library

    ImagePicker.launchImageLibrary({quality: 0.7}, (response) => {
      console.log('response', response);
      if (response.didCancel) {
        showMessage({
          message: 'oops, kok ga jadi milih photonya ?',
          type: 'danger',
          icon: 'danger',
        });
      } else {
        setphotoForDB(`data:${response.type};base64, ${response.data}`);

        const source = {uri: response.uri};

        setphoto(source);
        sethasPhoto(true);
      }
    });
  };

  const uploadAndContinue = () => {
    // function update data to database use firebase
    Firebase.database()
      .ref(`users/${uid}/`)
      .update({photo: photoForDB}, (error) => {
        if (error) {
          // The write failed...
          showMessage({
            message: 'Upload Photo error',
            type: 'danger',
            floating: true,
            icon: 'danger',
          });
        } else {
          // Data saved successfully!
          showMessage({
            message: 'Upload Photo was sucessfully updated',
            type: 'success',
            floating: true,
            icon: 'success',
          });
          const data = route.params;
          data.photo = photoForDB;

          storeData('user', data);
          navigation.replace('MainApp');
        }
      });
  };

  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Upload Photo" />

      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image style={styles.avatar} source={photo} />
            {hasPhoto && <ICRemvoe style={styles.add} />}
            {!hasPhoto && <ICAdd style={styles.add} />}
          </TouchableOpacity>
          <Text style={styles.name}>{fullName}</Text>
          <Gap height={10} />
          <Text style={styles.email}>{email}</Text>
        </View>
        <View>
          <Button
            title="Upload and Continue"
            disable={!hasPhoto}
            onPress={uploadAndContinue}
          />
          <Gap height={30} />

          <TouchableOpacity onPress={() => navigation.replace('MainApp')}>
            <Link label="Skip for this" align="center" size={16} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 64,
    flex: 1,
    justifyContent: 'space-between',
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 130 / 2,
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  add: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    fontFamily: fonts.primary[700],
    textAlign: 'center',
  },
  email: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    textAlign: 'center',
  },
});
