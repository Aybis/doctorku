import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {ILPhoto} from '../../assets';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {Firebase} from '../../config';
import {colors, getData, showError, showSuccess, storeData} from '../../utils';

const EditProfile = ({navigation}) => {
  const [profile, setprofile] = useState({
    fullName: '',
    email: '',
    photo: ILPhoto,
    phone: '',
  });
  const dispatch = useDispatch();
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
    if (password.length > 0) {
      if (password.length < 6) {
        showError('Error', 'Password must least by 6 charachter');
      } else {
        //update password and profile
        updateProfileData();
        updatePasswordProfile();
      }
    } else {
      updateProfileData();
    }
  };

  const updatePasswordProfile = () => {
    //update password
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // update password user
        user.updatePassword(password).catch((err) => {
          showError(err.code, err.message);
        });
      }
    });

    const user = Firebase.auth().currentUser;
    user
      .updatePassword(password)
      .then(() => {
        showSuccess('Password Updated');
      })
      .catch((err) => {
        showError(err.code, err.message);
      });
  };

  const updateProfileData = () => {
    dispatch({
      type: 'SET_LOADING',
      value: true,
    });

    const data = profile;
    data.photo = photoForDB === '' ? photo.uri : photoForDB;
    Firebase.database()
      .ref(`users/${profile.uid}/`)
      .update(data, (error) => {
        if (error) {
          // The write failed...
          dispatch({
            type: 'SET_LOADING',
            value: false,
          });
          showError('Update Profle error');
        } else {
          dispatch({
            type: 'SET_LOADING',
            value: false,
          });
          // Data saved successfully!
          storeData('user', null);
          storeData('user', data);
          setTimeout(() => {
            showSuccess('Success', 'Update Profile was sucessfully updated');
          }, 1000);
          navigation.replace('MainApp');
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

    ImagePicker.launchImageLibrary({quality: 0.7}, (response) => {
      if (response.didCancel) {
        showError('oops, kok ga jadi milih photonya ?');
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
