import {showMessage} from 'react-native-flash-message';

export const showError = (msg, desc = '') => {
  showMessage({
    message: msg,
    description: desc,
    type: 'danger',
    icon: 'danger',
    floating: true,
  });
};

export const showSuccess = (msg, desc = '') => {
  showMessage({
    message: msg,
    description: desc,
    type: 'success',
    icon: 'success',
    floating: true,
  });
};
