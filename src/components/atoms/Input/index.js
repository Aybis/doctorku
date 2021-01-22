import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';

const Input = ({
  label,
  type,
  value,
  disable,
  onChangeText,
  multiline = false,
}) => {
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

  const [border, setBorder] = useState(colors.border);

  const onFocusForm = () => {
    setBorder(colors.tertiary);
  };

  const onBlurForm = () => {
    setBorder(colors.border);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.container(border, disable)}>
        <TextInput
          style={styles.input}
          onFocus={onFocusForm}
          onBlur={onBlurForm}
          placeholder={label}
          value={value}
          multiline={multiline}
          onChangeText={onChangeText}
          editable={!disable}
          secureTextEntry={isSwitchEnabled}
          keyboardType={keyboardType()}
        />

        <Toggle />
      </View>
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  container: (border, disable) => ({
    marginTop: 10,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: border,
    backgroundColor: disable ? colors.button.disable.background : colors.white,
    // opacity: disable ? 0.7 : 1,
    fontFamily: fonts.primary[400],
    alignItems: 'center',
  }),
  label: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
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
