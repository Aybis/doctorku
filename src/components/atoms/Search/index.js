import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICSearch} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Search = ({title}) => {
  return (
    <View style={styles.container}>
      <ICSearch style={styles.icon} />
      <Text style={styles.text}>Search {title} ...</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: colors.disabled,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  icon: {
    opacity: 0.7,
  },
  text: {
    opacity: 0.7,
    paddingLeft: 10,
    fontFamily: fonts.primary[700],
    fontSize: 14,
    color: colors.text.secondary,
  },
});
