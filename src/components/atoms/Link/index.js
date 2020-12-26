import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../utils';

const Link = ({align, label, size}) => {
  return (
    <View>
      <Text style={styles.link(align, size)}>{label}</Text>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  link: (align, size) => ({
    marginTop: 10,
    textAlign: align,
    textDecorationLine: 'underline',
    fontFamily: fonts.primary[600],
    fontSize: size !== null ? size : '12',
  }),
});
