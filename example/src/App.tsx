/* eslint-disable react-native/no-inline-styles */
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'pixelartui-react-native';
import { StyledScrollView } from './styled';
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StyledScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <Button
            text="Custom size"
            buttonSize="small"
            buttonType="main"
            customHeight="100"
            customWidth="100"
            onPress={() => {}}
          />
          <Button
            text="Outline"
            buttonSize="medium"
            buttonType="outline"
            onPress={() => {}}
          />
          <Button
            text="Background Color"
            buttonSize="medium"
            buttonType="main"
            backgroundColor="#FF5733"
            customWidth="200"
            onPress={() => {}}
          />
          <Button
            text="Full width"
            buttonSize="medium"
            buttonType="main"
            onPress={() => {}}
            fullwidth
          />
          <Button
            text="Click Me"
            buttonSize="medium"
            buttonType="outline"
            backgroundColor="#FF5733"
            onPress={() => {}}
          />
          <Button
            text="Click Me"
            buttonSize="large"
            buttonType="main"
            onPress={() => {}}
          />
          <Button
            text="Round Custom Size"
            buttonSize="small"
            buttonType="main"
            customHeight="100"
            customWidth="100"
            round
            onPress={() => {}}
          />
          <Button
            text="Round"
            buttonSize="medium"
            buttonType="main"
            round
            onPress={() => {}}
          />
          <Button
            text="Round Large"
            buttonSize="large"
            buttonType="main"
            round
            onPress={() => {}}
          />

          <Button
            text="Disabled"
            buttonSize="large"
            buttonType="main"
            round
            disabled
            onPress={() => {}}
          />
        </StyledScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
