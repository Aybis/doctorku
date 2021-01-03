import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ICBack, ICBackWhite, ICMessage, ICNotification} from '../../../assets';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <ICBack />;
    }
    if (icon === 'back-white') {
      return <ICBackWhite />;
    }
    if (icon === 'notification') {
      return <ICNotification />;
    }
    if (icon === 'chat') {
      return <ICMessage />;
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
