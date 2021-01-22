import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { ILLogin } from '../../assets';
import { Button, Dropdown, Gap, Input, Link } from '../../components';
import { Firebase } from '../../config';
import {
  colors,
  fonts,
  getData,
  showError,
  showSuccess,
  storeData,
  useForm,
} from '../../utils';

const Login = ({ navigation }) => {
  const [form, setform] = useForm({ email: '', password: '', as: 'user' });
  const dispatch = useDispatch();
  const onChangeAs = (val) => {
    setform('as', val);
  };

  const LoginApp = () => {
    dispatch({
      type: 'SET_LOADING',
      value: true,
    });

    Firebase.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        dispatch({
          type: 'SET_LOADING',
          value: false,
        });
        if (form.as === 'doctor') {
          loginDoctor(res);
        }

        if (form.as === 'user') {
          loginUser(res);
        }
      })
      .catch((err) => {
        dispatch({
          type: 'SET_LOADING',
          value: false,
        });
        showError(err.message, err.desc);
      });
  };

  const loginDoctor = (res) => {
    Firebase.database()
      .ref(`doctors/${res.user.uid}/`)
      .once('value')
      .then((resUser) => {
        if (resUser.val()) {
          storeData('user', resUser.val());

          // show message success
          showSuccess(
            'Wow, It Workss !!!',
            `Hello ${res.user.email}, Welcome Back!`,
          );
          navigation.replace('MainApp');
        }
      });
  };

  const loginUser = (res) => {
    Firebase.database()
      .ref(`users/${res.user.uid}/`)
      .once('value')
      .then((resDB) => {
        if (resDB.val()) {
          showSuccess(
            'Wow, It Workss !!!',
            `Hello ${res.user.fullName}, Welcome Back!`,
          );
          storeData('user', resDB.val());
          navigation.replace('MainApp');
        }
      });
  };

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
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
          <Gap height={10} />
          <Dropdown
            label="Login As"
            selectedValue={form.as}
            onChange={(itemValue, itemIndex) => onChangeAs(itemValue)}
            listItem={['user', 'doctor']}
          />
          <Link label="Forgot Password" align="right" size={12} />
          <Gap height={10} />
        </View>
        <Button title="Sign In" type="primary" onPress={LoginApp} />
        <TouchableOpacity onPress={() => navigation.replace('Register')}>
          <Link label="Don't have account? Register" align="center" size={16} />
        </TouchableOpacity>
        <Gap height={20} />
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    paddingHorizontal: 40,
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
