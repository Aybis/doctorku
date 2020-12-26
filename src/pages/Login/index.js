import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ILLogin} from '../../assets';
import {Button, Input, Link} from '../../components';
import {colors, fonts} from '../../utils';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.logo}>
        <ILLogin />
        <Text style={styles.textHeader}>Let's sign you in</Text>
        <Text style={styles.text}>Welcome back.</Text>
        <Text style={styles.text}>You've been missed!</Text>
      </View>

      <View>
        <Input label="Yourmail@mail.com" type="email" />
        <Input label="Password" type="password" />
        <Link label="Forgot Password" align="right" size={12} />
      </View>
      <Button
        title="Sign In"
        type="primary"
        onPress={() => navigation.replace('MainApp')}
      />
      <TouchableOpacity onPress={() => navigation.replace('Register')}>
        <Link label="Don't have account? Register" align="center" size={16} />
      </TouchableOpacity>
    </View>
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
    marginTop: 40,
    fontSize: 32,
    fontFamily: fonts.primary[700],
  },
  text: {
    fontSize: 28,
    fontFamily: fonts.primary[400],
  },
});
