import { Text, StyleSheet } from 'react-native';
import { StyledContainer } from 'pixelartui-react-native';

// const result = multiply(3, 7);

export default function App() {
  return (
    <StyledContainer testId="test-id">
      <Text>Testting</Text>
    </StyledContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
