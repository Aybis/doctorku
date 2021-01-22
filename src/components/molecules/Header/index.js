import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Button, Gap } from '../../atoms';

const Header = ({ onPress, title }) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-dark" onPress={onPress} />
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textTransform: 'capitalize',
    textAlign: 'center',
    flex: 1,
    fontSize: 24,
    fontFamily: fonts.primary[700],
  },
});
