import type { GestureResponderEvent } from 'react-native';

export interface StyledContainerProps {
  children: React.ReactNode;
  testId: string;
  className?: string;
  fullwidth?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}
