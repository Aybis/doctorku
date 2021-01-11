import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ILPhoto} from '../../assets';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {Firebase} from '../../config';
import {colors, getData, storeData} from '../../utils';
import {showMessage} from 'react-native-flash-message';
import ImagePicker from 'react-native-image-picker';

const EditProfile = ({navigation}) => {
  const [profile, setprofile] = useState({
    fullName: '',
    email: '',
    photo: ILPhoto,
    phone: '',
  });
  const [photo, setphoto] = useState(ILPhoto);
  const [photoForDB, setphotoForDB] = useState('');

  const [password, setpassword] = useState('');

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      setphoto({uri: res.photo});
      setprofile(data);
    });
  }, []);

  const onPressUpdate = () => {
    // () => navigation.goBack('UserProfile')

    if (password.length > 0) {
      if (password.length < 6) {
        showMessage({
          message: 'Password must least by 6 charachter',
          type: 'danger',
          floating: true,
          icon: 'danger',
        });
      } else {
        //update password and profile
        // updateProfileData();
        updatePasswordProfile();
        // navigation.replace('MainApp');
      }
    } else {
      updateProfileData();
      // navigation.replace('MainApp');
    }
  };

  const updatePasswordProfile = () => {
    //update password
    // Firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     console.log('user', user);
    //update password user
    // user.updatePassword(password).catch((err) => {
    //   console.error(err);
    //   showMessage({
    //     message: err.code,
    //     description: err.message,
    //     type: 'danger',
    //     floating: true,
    //     icon: 'danger',
    //   });
    // });
    // }
    // });

    const user = Firebase.auth().currentUser;
    user
      .updatePassword(password)
      .then(() => {
        console.log('Password updated');
      })
      .catch((err) => {
        console.log(err);
        showMessage({
          message: err.code,
          description: err.message,
          type: 'danger',
          floating: true,
          icon: 'danger',
        });
      });
    console.log('updatePasswordUser', user);
  };

  const updateProfileData = () => {
    const data = profile;
    data.photo = photoForDB === '' ? photo.uri : photoForDB;
    console.log(data);
    Firebase.database()
      .ref(`users/${profile.uid}/`)
      .update(data, (error) => {
        if (error) {
          // The write failed...
          showMessage({
            message: 'Update Profle error',
            type: 'danger',
            floating: true,
            icon: 'danger',
          });
        } else {
          // Data saved successfully!
          storeData('user', data);
          showMessage({
            message: 'Update Profile was sucessfully updated',
            type: 'success',
            floating: true,
            icon: 'success',
          });
        }
      });
  };

  const changeText = (key, value) => {
    setprofile({
      ...profile,
      [key]: value,
    });
  };

  const getImage = () => {
    // launchCamera for activate camera
    //launchImageLibrary for get image from library

    ImagePicker.launchCamera({quality: 0.7}, (response) => {
      console.log('response', response);
      if (response.didCancel) {
        showMessage({
          message: 'oops, kok ga jadi milih photonya ?',
          type: 'danger',
          icon: 'danger',
        });
      } else {
        const source = {uri: response.uri};

        setphotoForDB(`data:${response.type};base64, ${response.data}`);
        setphoto(source);
      }
    });
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Header title={'Edit Profile'} onPress={() => navigation.goBack()} />
        <View style={styles.form}>
          <Profile isRemove photo={photo} onPress={getImage} />
          <Gap height={20} />

          <Input
            label="Full Name"
            value={profile.fullName}
            onChangeText={(value) => changeText('fullName', value)}
          />
          <Gap height={24} />

          <Input label="Email" value={profile.email} disable />
          <Gap height={24} />

          <Input
            label="Phone"
            value={profile.phone}
            type="number"
            onChangeText={(value) => changeText('phone', value)}
          />
          <Gap height={24} />

          <Input
            label="Password"
            type="password"
            value={password}
            onChangeText={(value) => setpassword(value)}
          />
          <Gap height={40} />

          <Button title="Save Profile" onPress={onPressUpdate} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-between',
  },
  form: {
    paddingTop: 0,
    padding: 40,
  },
});
