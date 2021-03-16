const mainColors = {
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  green3: '#0BCAD4',
  dark1: '#112340',
  dark2: '#495A75',
  dark3: '#8092AF',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  grey3: '#EDEEF0',
  blue1: '#0066CB',
  black1: '#000000',
  black2: '(rgba(0, 0, 0, 0.5))',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  tertiary: mainColors.blue1,
  disable: mainColors.grey3,
  white: 'white',
  black: 'black',
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuInactive: mainColors.dark2,
    menuActive: mainColors.green1,
    chatDesc: mainColors.dark3,
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
  },
  border: mainColors.grey2,
  cardLight: mainColors.green2,
  cardDark: mainColors.green3,
  loadingBackground: mainColors.black2,
};
