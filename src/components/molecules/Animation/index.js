import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const Animation = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.text}>Loading ...</Text>
    </View>
  );
};

export default Animation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.loadingBackground,
    width: '100%',
    height: '100%',
  },
  text: {
    color: colors.primary,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    marginTop: 20,
  },
});
