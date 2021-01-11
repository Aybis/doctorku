import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ILLogin} from '../../assets';
import {Animation, Button, Gap, Header, Input, Link} from '../../components';
import {Firebase} from '../../config';
import {colors, fonts, storeData, useForm} from '../../utils';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    phone: '',
    email: '',
    password: '',
  });

  const [loading, setloading] = useState(false);

  const onContinue = () => {
    console.log(form);

    setloading(true);

    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        // set false for turn off loading screen
        setloading(false);

        //declare variable for collect data when store to database
        const data = {
          fullName: form.fullName,
          phone: form.phone,
          email: form.email,
          uid: success.user.uid,
        };

        // function store data to database use firebase
        Firebase.database().ref(`users/${success.user.uid}/`).set(data);

        // getData from localStorage with key user
        // getData('user').then((res) => {
        //   console.log('data: ', res);
        // });

        // storeData to localStorage with key user and value form
        storeData('user', data);

        // function reset every form input after success register
        setForm('reset');

        // set flash message on top when register success
        showMessage({
          message: 'Register Success',
          description: `Your account with email "${success.user.email}" has successfully registered`,
          type: 'success',
          floating: true,
          icon: 'success',
        });

        navigation.replace('UploadPhoto', data);
      })
      .catch((error) => {
        // let errorCode = error.code;
        let errorMessage = error.message;
        setloading(false);

        showMessage({
          message: 'Register Error',
          description: errorMessage,
          type: 'danger',
          floating: true,
          icon: 'danger',
        });
      });
  };
  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Header onPress={() => navigation.goBack()} />
        <View style={styles.header}>
          <ILLogin />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Create Account</Text>

          <Input
            label="Full name"
            value={form.fullName}
            onChangeText={(value) => setForm('fullName', value)}
          />
          <Gap height={10} />

          <Input
            label="Email"
            type="email"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={10} />

          <Input
            label="Phone"
            type="number"
            value={form.phone}
            onChangeText={(value) => setForm('phone', value)}
          />
          <Gap height={10} />

          <Input
            label="Password"
            type="password"
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
          />

          <Gap height={22} />
          <Button title="Sign Up" onPress={onContinue} />
          <Gap height={10} />
          <TouchableOpacity onPress={() => navigation.replace('Login')}>
            <Link
              label="I'm already member. Sign In"
              align="center"
              size={16}
            />
          </TouchableOpacity>
          <Gap height={20} />
        </View>
      </View>
      {loading && <Animation />}
    </KeyboardAwareScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.primary[700],
    textAlign: 'center',
    marginBottom: 10,
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 10,
    paddingHorizontal: 30,
    flex: 1,
  },
});
