const mainColors = {
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  dark1: '#112340',
  dark2: '#495A75',
  grey1: '#7D8797',
  grey2: '#F3F3F3',
  blue1: '#0066CB',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  tertiary: mainColors.blue1,
  dummy: 'yellow',
  white: 'white',
  black: 'black',
  border: '#E9E9E9',
  disabled: '#EDEEF0',
  inputText: {
    default: mainColors.grey2,
  },
  text: {
    default: mainColors.dark1,
    secondary: mainColors.grey1,
    inactive: mainColors.dark2,
    active: mainColors.green1,
  },
  card: {
    light: mainColors.green2,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
    dark: {
      background: mainColors.dark1,
      text: 'white',
    },
  },
};
