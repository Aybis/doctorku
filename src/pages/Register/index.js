import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ILLogin} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors, fonts} from '../../utils';

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Button
          type="icon-only"
          icon="back-dark"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.header}>
        <ILLogin />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Create Account</Text>

        <Input label="Full name" />
        <Input label="yourmail@mail.com" type="email" />
        <Input label="62812********" type="number" />
        <Input label="Password" type="password" />
        <Gap height={22} />
        <Button
          title="Sign Up"
          onPress={() => navigation.replace('UploadPhoto')}
        />
        <Gap height={10} />
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Link label="I'm already member. Sign In" align="center" size={16} />
        </TouchableOpacity>
      </View>
    </View>
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
  container: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: fonts.primary[700],
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 15,
    paddingHorizontal: 30,
    flex: 1,
  },
});
