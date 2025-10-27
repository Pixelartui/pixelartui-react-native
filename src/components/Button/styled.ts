import Styled, { type DefaultTheme } from 'styled-components/native';
import { type ButtonSize, type ButtonType } from './types';
import {
  adjust,
  getContrastColor,
  handleCustomColor,
} from '../../Theme/helper';
import type { FontColor } from '../../Theme/styled';
// import { type FontColor } from '../../Theme/styled';

const handleButtonSize = (size: ButtonSize, theme: DefaultTheme) => {
  switch (size) {
    case 'small':
      return theme.button.size.small;
    case 'medium':
      return theme.button.size.medium;
    case 'large':
      return theme.button.size.large;
    default:
      return theme.button.size.medium;
  }
};

const handleButtonColour = (type: ButtonType, theme: DefaultTheme) => {
  switch (type) {
    case 'main':
      return theme.button.color.main.normal;
    case 'outline':
      return theme.button.color.outline.normal;
    default:
      return theme.button.color.main.normal;
  }
};

// const handleHoverColour = (type: ButtonType, theme: DefaultTheme) => {
//   switch (type) {
//     case 'main':
//       return theme.button.color.main.hover;
//     case 'outline':
//       return theme.button.color.outline.hover;
//     default:
//       return theme.button.color.main.hover;
//   }
// };

const handleCustomButtonColor = (customColor: string) => {
  return handleCustomColor(customColor);
};

const handleFontColor = (backgroundColor: string, color: FontColor) => {
  return getContrastColor(backgroundColor, color.dark, color.bright);
};

const handleSecondLayerBackground = (
  disabled: boolean | undefined,
  theme: DefaultTheme,
  backgroundColor: string | undefined,
  type: ButtonType | undefined
) => {
  if (disabled) {
    return theme.general.color.disabled;
  }

  if (backgroundColor) {
    return type === 'outline'
      ? 'transparent'
      : handleCustomButtonColor(backgroundColor).customPrimaryColor;
  }

  return handleButtonColour(type || 'main', theme).primary;
};

// const handleSecondLayerBackgroundHover = (
//   disabled: boolean | undefined,
//   theme: DefaultTheme,
//   backgroundColor: string | undefined,
//   type: ButtonType | undefined
// ) => {
//   if (disabled) {
//     return theme.general.color.disabled;
//   }

//   if (backgroundColor) {
//     return handleCustomButtonColor(backgroundColor).customHover;
//   }

//   return handleHoverColour(type || 'main', theme).primary;
// };

const handleSecondLayerTopBorder = (
  disabled: boolean | undefined,
  theme: DefaultTheme,
  backgroundColor: string | undefined,
  type: ButtonType | undefined
) => {
  if (disabled) {
    return adjust(theme.general.color.disabled, 40);
  }

  if (backgroundColor) {
    return handleCustomButtonColor(backgroundColor).customSecondaryColor;
  }

  return handleButtonColour(type || 'main', theme).secondary;
};

const handleSecondLayerBottomBorder = (
  disabled: boolean | undefined,
  theme: DefaultTheme,
  backgroundColor: string | undefined,
  type: ButtonType | undefined
) => {
  if (disabled) {
    return adjust(theme.general.color.disabled, -30);
  }

  if (backgroundColor) {
    return handleCustomButtonColor(backgroundColor).customTertiaryColor;
  }

  return handleButtonColour(type || 'main', theme).tertiary;
};

export const StyledButtonContainer = Styled.View<{
  $fullwidth?: boolean;
  $disabled?: boolean;
}>`
    font-family: 'Pixelify Sans';
    display: flex;
`;

export const StyledButtonWrapper = Styled.View`
    display: flex;
    flex-direction: row;
    `;

export const StyledButtonSideContainer = Styled.View<{
  $round?: boolean;
}>`
    display: flex;
    align-items: center;
`;

export const StyledTextContainer = Styled.View<{
  $size?: ButtonSize;
  $type?: ButtonType;
  $fullwidth?: boolean;
  $backgroundColor?: string;
}>`
    border: 5px solid black;
    border-left-width: 0;
    border-right-width: 0;
    ${(props) => props.$fullwidth && 'width: 100%;'}
    
`;

export const StyledTextContainerSecondLayer = Styled.TouchableHighlight<{
  $type?: ButtonType;
  $backgroundColor?: string;
  $disabled?: boolean;
  $size?: ButtonSize;
  $customWidth?: string;
  $customHeight?: string;
  $fullwidth?: boolean;
}>`

    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => {
      const size: string = handleButtonSize(
        props.$size || 'medium',
        props.theme
      ).width;

      if (props.$customWidth) {
        return props.$customWidth;
      }

      if (props.$fullwidth) {
        return '100vw';
      }
      return size;
    }}px;
    height: ${(props) => {
      const size: string = handleButtonSize(
        props.$size || 'medium',
        props.theme
      ).height;
      return props.$customHeight ? props.$customHeight : size;
    }}px;
    border: 5px solid ${(props) => handleSecondLayerTopBorder(props.$disabled, props.theme, props.$backgroundColor, props.$type)};
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-color: ${(props) => handleSecondLayerBottomBorder(props.$disabled, props.theme, props.$backgroundColor, props.$type)};
    background: ${(props) => handleSecondLayerBackground(props.$disabled, props.theme, props.$backgroundColor, props.$type)};
`;

export const StyledText = Styled.Text<{
  $size?: ButtonSize;
  $type?: ButtonType;
  $backgroundColor?: string;
}>`
    text-align: center;
    font-size: ${(props) =>
      handleButtonSize(props.$size || 'medium', props.theme).fontSize}px;
    color: ${(props) =>
      handleFontColor(
        props.$backgroundColor
          ? handleCustomButtonColor(props.$backgroundColor).customPrimaryColor
          : handleButtonColour(props.$type || 'main', props.theme).primary,
        handleButtonColour(props.$type || 'main', props.theme).font
      )};
`;

export const StyledButtonSideMainWrapper = Styled.View<{
  $size?: ButtonSize;
}>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    `;

export const StyledButtonSideMainFirst = Styled.View<{
  $type?: ButtonType;
  $backgroundColor?: string;
  $size?: ButtonSize;
  $customHeight?: string;
}>`
    background: ${(props) => handleButtonColour(props.$type || 'main', props.theme).border};
    width: 5px;
    display: flex;
    height: ${(props) => props.$customHeight || handleButtonSize(props.$size || 'medium', props.theme).height}px;
`;

export const StyledButtonSideMainSecond = Styled.View<{
  $size?: ButtonSize;
  $type?: ButtonType;
  $customHeight?: string;
}>`
    border: 5px solid ${(props) => handleButtonColour(props.$type || 'main', props.theme).border};
    border-left-width: 0;
    border-right-width: 0;
    height: ${(props) => (Number(props.$customHeight || handleButtonSize(props.$size || 'medium', props.theme).height) + 10).toString()}px;
    display: flex;
    width: 5px;
`;

export const StyledButtonSideMainSecondInner = Styled.View<{
  $backgroundColor?: string;
  $type?: ButtonType;
  $disabled?: boolean;
}>`
    width: 100%;
    height: 100%;
    display: flex;
    background: ${(props) => handleSecondLayerTopBorder(props.$disabled, props.theme, props.$backgroundColor, props.$type)};
    border: 5px solid ${(props) => handleSecondLayerBottomBorder(props.$disabled, props.theme, props.$backgroundColor, props.$type)};
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
`;

export const StyledButtonSideMainSecondInnerRight = Styled.View<{
  $backgroundColor?: string;
  $type?: ButtonType;
  $disabled?: boolean;
}>`
    width: 100%;
    height: 100%;
    display: flex;
    background: ${(props) => handleSecondLayerBottomBorder(props.$disabled, props.theme, props.$backgroundColor, props.$type)};
    border-top: 5px solid ${(props) => handleSecondLayerTopBorder(props.$disabled, props.theme, props.$backgroundColor, props.$type)};
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-width: 0;

`;

export const StyledButtonSideRoundFirst = Styled.View<{
  $backgroundColor?: string;
  $type?: ButtonType;
  $size?: ButtonSize;
  $customHeight?: string;
}>`
    width: 5px;
    height: ${(props) => (Number(props.$customHeight || handleButtonSize(props.$size || 'medium', props.theme).height) - 10).toString()}px;
    background: ${(props) => handleButtonColour(props.$type || 'main', props.theme).border};

`;

export const StyledButtonSideRoundSecond = Styled.View<{
  $backgroundColor?: string;
  $type?: ButtonType;
  $disabled?: boolean;
  $size?: ButtonSize;
  $customHeight?: string;
}>`
    width: 5px;
    display: flex;
    height: ${(props) => Number(props.$customHeight || handleButtonSize(props.$size || 'medium', props.theme).height).toString()}px;
    border: 5px solid ${(props) => handleButtonColour(props.$type || 'main', props.theme).border};
    background: ${(props) => handleSecondLayerTopBorder(props.$disabled, props.theme, props.$backgroundColor, props.$type)};
    border-left-width: 0;
    border-right-width: 0;
`;

export const StyledButtonSideRoundSecondRightSide = Styled.View<{
  $backgroundColor?: string;
  $type?: ButtonType;
  $disabled?: boolean;
  $size?: ButtonSize;
  $customHeight?: string;
}>`
    width: 5px;
    height: ${(props) => (Number(props.$customHeight || handleButtonSize(props.$size || 'medium', props.theme).height) - 0).toString()}px;
    border: 5px solid ${(props) => handleButtonColour(props.$type || 'main', props.theme).border};
    background: ${(props) => handleSecondLayerBottomBorder(props.$disabled, props.theme, props.$backgroundColor, props.$type)};
    border-left-width: 0;
    border-right-width: 0;

`;

export const StyledButtonSideRoundThird = Styled.View<{
  $backgroundColor?: string;
  $type?: ButtonType;
  $disabled?: boolean;
  $size?: ButtonSize;
  $customHeight?: string;
}>`
    width: 5px;
    display: flex;
    height: ${(props) => (Number(props.$customHeight || handleButtonSize(props.$size || 'medium', props.theme).height) + 10).toString()}px;
    border: 5px solid ${(props) => handleButtonColour(props.$type || 'main', props.theme).border};
    background: ${(props) => handleSecondLayerBackground(props.$disabled, props.theme, props.$backgroundColor, props.$type)};
    border-left-width: 0;
    border-right-width: 0;

`;

export const StyledButtonSideRoundInnerLayer = Styled.View<{
  $backgroundColor?: string;
  $type?: ButtonType;
  $disabled?: boolean;
}>`
    width: 100%;
    height: 100%;
    border: 5px solid ${(props) => handleSecondLayerTopBorder(props.$disabled, props.theme, props.$backgroundColor, props.$type)};
    border-bottom-color: ${(props) => handleSecondLayerBottomBorder(props.$disabled, props.theme, props.$backgroundColor, props.$type)};
    display: flex;
    border-left-width: 0;
    border-right-width: 0;
`;
