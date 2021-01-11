import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Gap, Button} from '../../components';
import {colors, fonts} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>DoctorKu</Text>
        <ILLogo style={styles.logo} />
        <Text style={styles.text}>Best way to know your Health!</Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={15} />
        <Button
          title="Sign In"
          type="secondary"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: '#112340',
    fontFamily: fonts.primary[700],
  },
  logo: {
    marginTop: 60,
  },
  text: {
    marginVertical: 20,
    fontSize: 24,
    alignItems: 'center',
    textAlign: 'center',
    color: '#112340',
    fontFamily: fonts.primary[700],
  },
});
