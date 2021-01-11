import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICAdd, ICRemvoe, ILPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts} from '../../utils';
import ImagePicker from 'react-native-image-picker';

const UploadPhoto = ({navigation}) => {
  const [hasPhoto, sethasPhoto] = useState(false);
  const [response, setResponse] = useState(null);

  const getImage = () => {
    ImagePicker.launchCamera(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        setResponse(response);
      },
    );
  };

  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Upload Photo" />

      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image style={styles.avatar} source={ILPhoto} />
            {hasPhoto && <ICRemvoe style={styles.add} />}
            {!hasPhoto && <ICAdd style={styles.add} />}
          </TouchableOpacity>
          <Text style={styles.name}>Abdul Muchtar Astria</Text>
          <Gap height={10} />
          <Text style={styles.email}>muchtaras.30@gmail.com</Text>
        </View>
        <View>
          <Button title="Upload and Continue" disable />

          <Button
            title="Select image"
            onPress={() =>
              ImagePicker.launchImageLibrary(
                {
                  mediaType: 'photo',
                  includeBase64: false,
                  maxHeight: 200,
                  maxWidth: 200,
                },
                (response) => {
                  setResponse(response);
                },
              )
            }
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
