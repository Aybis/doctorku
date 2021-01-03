import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Type message to Frisca" />
      <Button type="btn-icon-send" />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  input: {
    borderRadius: 10,
    backgroundColor: colors.disabled,
    padding: 14,
    flex: 1,
    marginRight: 10,
    height: 50,
    fontFamily: fonts.primary.normal,
  },
});
