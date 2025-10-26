// import PixelifyRegular from '../fonts/PixelifySans-Regular.ttf';
import { adjust } from './helper';
import { type DefaultTheme } from 'styled-components/native';

const mainPrimaryColor = '#04A1E1';
const mainSecondaryColor = adjust(mainPrimaryColor, 40);
const mainTertiaryColor = adjust(mainPrimaryColor, -30);
const mainFontColor = '#1C2924';
const mainFontColorContrast = '#ffffff';
const mainBorderColor = '#1C2924';
const outlinePrimaryColor = '#ffffff00';
const disableColor = '#ECDDF7';

export const theme: DefaultTheme = {
  general: {
    color: {
      primary: mainPrimaryColor,
      secondary: mainSecondaryColor,
      tertiary: mainTertiaryColor,
      font: mainFontColor,
      fontContrast: mainFontColorContrast,
      fontDisabled: '#d7d0d0',
      disabled: disableColor,
      white: '#ffffff',
      black: '#000000',
    },
  },
  button: {
    color: {
      main: {
        normal: {
          primary: mainPrimaryColor,
          secondary: mainSecondaryColor,
          tertiary: mainTertiaryColor,
          font: {
            bright: mainFontColor,
            dark: mainFontColorContrast,
          },
          border: mainBorderColor,
        },
        hover: {
          primary: adjust(mainPrimaryColor, 5),
          secondary: mainSecondaryColor,
          tertiary: mainTertiaryColor,
          font: {
            bright: mainFontColor,
            dark: mainFontColorContrast,
          },
          border: mainBorderColor,
        },
      },
      outline: {
        normal: {
          primary: outlinePrimaryColor,
          secondary: mainSecondaryColor,
          tertiary: mainTertiaryColor,
          font: {
            bright: mainFontColor,
            dark: mainFontColorContrast,
          },
          border: mainBorderColor,
        },
        hover: {
          primary: '#96969669',
          secondary: mainSecondaryColor,
          tertiary: mainTertiaryColor,
          font: {
            bright: mainFontColor,
            dark: mainFontColorContrast,
          },
          border: mainBorderColor,
        },
      },
    },
    size: {
      small: {
        width: '60',
        height: '30',
        fontSize: '20',
      },
      medium: {
        width: '100',
        height: '35',
        fontSize: '22',
      },
      large: {
        width: '150',
        height: '40',
        fontSize: '24',
      },
    },
  },
  textInput: {
    color: {
      primary: mainPrimaryColor,
      secondary: mainSecondaryColor,
      tertiary: mainTertiaryColor,
      font: {
        bright: mainFontColor,
        dark: mainFontColorContrast,
      },
      border: mainBorderColor,
    },
    size: {
      width: '140',
      height: '30',
      fontSize: '20',
    },
  },
  select: {
    color: {
      primary: mainPrimaryColor,
      secondary: mainSecondaryColor,
      tertiary: mainTertiaryColor,
      font: {
        bright: mainFontColor,
        dark: mainFontColorContrast,
      },
      border: mainBorderColor,
    },
    size: {
      width: '130',
      height: '30',
      fontSize: '20',
    },
  },
};
