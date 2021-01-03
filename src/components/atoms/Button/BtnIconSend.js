import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ICSendActive, ICSendDisable} from '../../../assets';
import {colors} from '../../../utils';

const BtnIconSend = ({disable}) => {
  return (
    <View style={styles.container(disable)}>
      {disable && <ICSendDisable />}
      {!disable && <ICSendActive />}
    </View>
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