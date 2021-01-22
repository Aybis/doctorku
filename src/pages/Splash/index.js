import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILLogo } from '../../assets';
import { Firebase } from '../../config';

const Splash = ({ navigation }) => {
  useEffect(() => {
    const unRemovePage = Firebase.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      }, 3000);
    });

    return () => unRemovePage();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ILLogo />
      <Text style={styles.text}>DoctorKu</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontFamily: 'Nunito-ExtraBold',
    marginTop: 20,
  },
});
