import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  ICHome,
  ICHomeActive,
  ICHospitals,
  ICHospitalsActive,
  ICMessage,
  ICMessageActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <ICHomeActive /> : <ICHome />;
    }
    if (title === 'Messages') {
      return active ? <ICMessageActive /> : <ICMessage />;
    }
    if (title === 'Hospitals') {
      return active ? <ICHospitalsActive /> : <ICHospitals />;
    }

    return <ICHome />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (active) => ({
    fontSize: 12,
    color: active ? colors.text.active : colors.text.inactive,
    fontFamily: fonts.primary[400],
    marginTop: 10,
  }),
});
