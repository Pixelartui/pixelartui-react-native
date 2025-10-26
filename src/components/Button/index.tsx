import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  StyledButtonContainer,
  StyledButtonSideMainFirst,
  StyledButtonSideContainer,
  StyledButtonSideRoundFirst,
  StyledButtonSideRoundInnerLayer,
  StyledButtonSideRoundSecond,
  StyledButtonSideRoundSecondRightSide,
  StyledButtonSideRoundThird,
  StyledTextContainer,
  StyledTextContainerSecondLayer,
  StyledButtonSideMainSecond,
  StyledButtonSideMainSecondInner,
  StyledButtonSideMainSecondInnerRight,
  StyledButtonWrapper,
  StyledButtonSideMainWrapper,
  StyledText,
} from './styled';
import { type ButtonProps, type HandleOnClickEvent } from './types';
import { theme } from '../../Theme';
import { handleCustomColor } from '../../Theme/helper';

export const Button: React.FC<ButtonProps> = ({
  text,
  buttonSize,
  buttonType,
  fullwidth,
  round,
  backgroundColor,
  disabled,
  customWidth,
  customHeight,
  touchableProps,
  onPress,
}) => {
  const handleOnClick = (event: HandleOnClickEvent) => {
    if (disabled) return;

    if (onPress) onPress(event);
  };

  const handleHoverColour = () => {
    switch (buttonType) {
      case 'main':
        return theme.button.color.main.hover;
      case 'outline':
        return theme.button.color.outline.hover;
      default:
        return theme.button.color.main.hover;
    }
  };

  const handleUnderLayColor = () => {
    if (disabled) {
      return theme.general.color.disabled;
    }

    if (backgroundColor) {
      return handleCustomColor(backgroundColor).customHover;
    }

    return handleHoverColour().primary;
  };
  return (
    <ThemeProvider theme={theme}>
      <StyledButtonContainer $fullwidth={fullwidth} $disabled={disabled}>
        <StyledButtonWrapper>
          <StyledButtonSideContainer $round={round}>
            {round ? (
              <StyledButtonSideMainWrapper>
                <StyledButtonSideRoundFirst
                  $type={buttonType}
                  $size={buttonSize}
                  $customHeight={customHeight}
                />
                <StyledButtonSideRoundSecond
                  $type={buttonType}
                  $backgroundColor={backgroundColor}
                  $disabled={disabled}
                  $size={buttonSize}
                  $customHeight={customHeight}
                >
                  <StyledButtonSideRoundInnerLayer
                    $type={buttonType}
                    $backgroundColor={backgroundColor}
                    $disabled={disabled}
                  />
                </StyledButtonSideRoundSecond>
                <StyledButtonSideRoundThird
                  $type={buttonType}
                  $backgroundColor={backgroundColor}
                  $disabled={disabled}
                  $size={buttonSize}
                  $customHeight={customHeight}
                >
                  <StyledButtonSideRoundInnerLayer
                    $type={buttonType}
                    $backgroundColor={backgroundColor}
                    $disabled={disabled}
                  />
                </StyledButtonSideRoundThird>
              </StyledButtonSideMainWrapper>
            ) : (
              <StyledButtonSideMainWrapper>
                <StyledButtonSideMainFirst
                  $type={buttonType}
                  $size={buttonSize}
                  $customHeight={customHeight}
                />
                <StyledButtonSideMainSecond
                  $type={buttonType}
                  $size={buttonSize}
                  $customHeight={customHeight}
                >
                  <StyledButtonSideMainSecondInner
                    $type={buttonType}
                    $backgroundColor={backgroundColor}
                    $disabled={disabled}
                  />
                </StyledButtonSideMainSecond>
              </StyledButtonSideMainWrapper>
            )}
          </StyledButtonSideContainer>
          <StyledTextContainer
            $size={buttonSize}
            $type={buttonType}
            $fullwidth={fullwidth || false}
            $backgroundColor={backgroundColor}
          >
            <StyledTextContainerSecondLayer
              $type={buttonType}
              $backgroundColor={backgroundColor}
              $disabled={disabled}
              $size={buttonSize}
              $customWidth={customWidth}
              $customHeight={customHeight}
              onPress={handleOnClick}
              underlayColor={handleUnderLayColor()}
              $fullwidth={fullwidth || false}
              {...touchableProps}
            >
              <StyledText
                $type={buttonType}
                $backgroundColor={backgroundColor}
                $size={buttonSize}
              >
                {text}
              </StyledText>
            </StyledTextContainerSecondLayer>
          </StyledTextContainer>
          <StyledButtonSideContainer $round={round}>
            {round ? (
              <StyledButtonSideMainWrapper>
                <StyledButtonSideRoundThird
                  $type={buttonType}
                  $backgroundColor={backgroundColor}
                  $disabled={disabled}
                  $size={buttonSize}
                  $customHeight={customHeight}
                >
                  <StyledButtonSideRoundInnerLayer
                    $type={buttonType}
                    $backgroundColor={backgroundColor}
                    $disabled={disabled}
                  />
                </StyledButtonSideRoundThird>
                <StyledButtonSideRoundSecondRightSide
                  $type={buttonType}
                  $backgroundColor={backgroundColor}
                  $disabled={disabled}
                  $size={buttonSize}
                  $customHeight={customHeight}
                >
                  <StyledButtonSideRoundInnerLayer
                    $type={buttonType}
                    $backgroundColor={backgroundColor}
                    $disabled={disabled}
                  />
                </StyledButtonSideRoundSecondRightSide>
                <StyledButtonSideRoundFirst
                  $type={buttonType}
                  $size={buttonSize}
                  $customHeight={customHeight}
                />
              </StyledButtonSideMainWrapper>
            ) : (
              <StyledButtonSideMainWrapper>
                <StyledButtonSideMainSecond
                  $type={buttonType}
                  $size={buttonSize}
                  $customHeight={customHeight}
                >
                  <StyledButtonSideMainSecondInnerRight
                    $type={buttonType}
                    $backgroundColor={backgroundColor}
                    $disabled={disabled}
                  />
                </StyledButtonSideMainSecond>
                <StyledButtonSideMainFirst
                  $type={buttonType}
                  $size={buttonSize}
                  $customHeight={customHeight}
                />
              </StyledButtonSideMainWrapper>
            )}
          </StyledButtonSideContainer>
        </StyledButtonWrapper>
      </StyledButtonContainer>
    </ThemeProvider>
  );
};
