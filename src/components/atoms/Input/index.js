import React from 'react';
import {StyleSheet, Switch, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';

const Input = ({label, type}) => {
  const Toggle = () => {
    if (type === 'password') {
      return (
        <Switch
          style={styles.toggle}
          value={isSwitchEnabled}
          onValueChange={(value) => setSwicth(value)}
        />
      );
    }
    return <View />;
  };
  const keyboardType = () => {
    if (type === 'email') {
      return 'email-address';
    }
    if (type === 'number') {
      return 'numeric';
    }
    return 'default';
  };
  const [isSwitchEnabled, setSwicth] = React.useState(
    type === 'password' ? true : false,
  );
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={label}
        secureTextEntry={isSwitchEnabled}
        keyboardType={keyboardType()}
      />
      <Toggle />
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.white,
    backgroundColor: colors.inputText.default,
    opacity: 0.8,
    fontFamily: fonts.primary[300],
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 20,
    paddingHorizontal: 20,
  },
  toggle: {
    marginRight: 20,
  },
});
