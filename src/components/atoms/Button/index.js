import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';
import BtnIconSend from './BtnIconSend';
import IconOnly from './IconOnly';

const Button = ({type, title, onPress, icon, disable}) => {
  if (type === 'icon-only') {
    return <IconOnly onPress={onPress} icon={icon} />;
  }

  if (type === 'btn-icon-send') {
    return <BtnIconSend disable={disable} onPress={onPress} />;
  }

  if (disable) {
    return (
      <View style={styles.disabledButton}>
        <Text style={styles.disabledText}>{title}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.dark.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
  }),
  disabledButton: {
    paddingVertical: 10,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    backgroundColor: colors.button.disable.background,
  },
  disabledText: {
    color: colors.button.disable.text,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
  },
  text: (type) => ({
    fontSize: 18,
    textAlign: 'center',
    color:
      type === 'secondary'
        ? colors.button.dark.text
        : colors.button.primary.text,
    fontFamily: fonts.primary[600],

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  }),
});
