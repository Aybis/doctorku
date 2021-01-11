import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ILLogin} from '../../assets';
import {Animation, Button, Gap, Input, Link} from '../../components';
import {Firebase} from '../../config';
import {colors, fonts, storeData, useForm} from '../../utils';

const Login = ({navigation}) => {
  const [form, setform] = useForm({email: '', password: ''});
  const [loading, setloading] = useState(false);

  const LoginApp = () => {
    setloading(true);
    Firebase.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        setloading(false);
        console.log('success : ', res);

        Firebase.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then((resUser) => {
            console.log('resUser: ', resUser.val());
            if (resUser.val()) {
              storeData('user', resUser.val());
            }
          });
        showMessage({
          message: 'Wow, It Workss !!!',
          description: `Hello ${res.user.email}, Welcome Back!`,
          type: 'success',
          icon: 'success',
          floating: true,
        });

        navigation.replace('MainApp');
      })
      .catch((err) => {
        setloading(false);
        showMessage({
          message: err.code,
          description: err.message,
          type: 'danger',
          icon: 'danger',
          floating: true,
        });
      });
  };

  return (
    <>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        <View style={styles.page}>
          <View style={styles.logo}>
            <ILLogin />
            <Text style={styles.textHeader}>Let's sign you in</Text>
            <Text style={styles.text}>Welcome back.</Text>
            <Text style={styles.text}>You've been missed!</Text>
            <Gap height={20} />
          </View>

          <View>
            <Input
              label="Email"
              type="email"
              value={form.email}
              onChangeText={(value) => setform('email', value)}
            />
            <Gap height={10} />
            <Input
              label="Password"
              type="password"
              value={form.password}
              onChangeText={(value) => setform('password', value)}
            />
            <Link label="Forgot Password" align="right" size={12} />
            <Gap height={10} />
          </View>
          <Button title="Sign In" type="primary" onPress={LoginApp} />
          <TouchableOpacity onPress={() => navigation.replace('Register')}>
            <Link
              label="Don't have account? Register"
              align="center"
              size={16}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      {loading && <Animation />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    padding: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  logo: {
    marginTop: 40,
    alignItems: 'center',
  },
  textHeader: {
    marginTop: 10,
    fontSize: 28,
    fontFamily: fonts.primary[700],
  },
  text: {
    fontSize: 24,
    fontFamily: fonts.primary[400],
  },
});
