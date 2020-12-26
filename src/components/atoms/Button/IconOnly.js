import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ICBack, ICNotification} from '../../../assets';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <ICBack />;
    }
    if (icon === 'back-white') {
      return <ICBack />;
    }
    if (icon === 'notification') {
      return <ICNotification />;
    }
    return <ICBack />;
  };
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Icon />
      </TouchableOpacity>
    </View>
  );
};

export default IconOnly;
