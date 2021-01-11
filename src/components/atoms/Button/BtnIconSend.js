import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ICSendActive, ICSendDisable} from '../../../assets';
import {colors} from '../../../utils';

const BtnIconSend = ({disable, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
      {disable && <ICSendDisable />}
      {!disable && <ICSendActive />}
    </TouchableOpacity>
  );
};

export default BtnIconSend;

const styles = StyleSheet.create({
  container: (disable) => ({
    backgroundColor: !disable ? colors.tertiary : colors.disabled,
    width: 50,
    height: 50,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});
