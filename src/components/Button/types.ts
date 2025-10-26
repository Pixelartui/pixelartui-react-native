export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'main' | 'outline';

export interface HandleOnClickEvent {
  // Generic event shape to avoid adding new imports; covers common use-cases
  preventDefault?: () => void;
  stopPropagation?: () => void;
  nativeEvent?: any;
  [key: string]: any;
}
export interface ButtonProps {
  text: string;
  buttonSize: ButtonSize;
  buttonType: ButtonType;
  fullwidth?: boolean;
  round?: boolean;
  backgroundColor?: string;
  disabled?: boolean;
  customWidth?: string;
  customHeight?: string;
  touchableProps?: Record<string, any>;
  onPress: (event: HandleOnClickEvent) => void;
}
