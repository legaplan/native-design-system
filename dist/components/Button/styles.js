import styled from "styled-components/native";
export const ButtonContainer = styled.TouchableOpacity `
  background-color: ${({ theme }) => theme.colors.components.button.primary.background.default};
  padding: 15px 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 6;
`;
export const ButtonText = styled.Text `
  color: white;
  font-weight: bold;
  font-size: 16px;
`;
