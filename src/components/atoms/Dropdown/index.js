import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const Input = ({ label, onChange, selectedValue, listItem, type = '' }) => {
  let list = [];

  const Capitalize = (str) => {
    if (type) {
      return (
        type.charAt(0).toUpperCase() +
        type.slice(1) +
        ' ' +
        str.charAt(0).toUpperCase() +
        str.slice(1)
      );
    } else {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  };

  listItem.forEach((element, index) => {
    list.push(
      <Picker.Item key={index} label={Capitalize(element)} value={element} />,
    );
  });
  return (
    <View>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.container}>
        <Picker
          selectedValue={selectedValue}
          mode="dropdown"
          dropdownIconColor={colors.primary}
          style={styles.dropdown}
          onValueChange={onChange}>
          {list}
        </Picker>
      </View>
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    fontFamily: fonts.primary[400],
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
  dropdown: {
    flex: 1,
    fontSize: 20,
    paddingHorizontal: 20,
  },
});
