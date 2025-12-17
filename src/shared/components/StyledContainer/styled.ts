import Styled from 'styled-components/native';

export const StyledComponentContainer = Styled.Pressable<{
  $fullwidth?: boolean;
}>`
    font-family: 'Pixelify Sans';
    display: flex;
    width: 100%;
`;
