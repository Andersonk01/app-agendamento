import styled from "styled-components";
import { TouchableOpacity, Text } from "react-native";

type ButtonProps = {
  onPress?: () => void;
};

export const ButtonContainer = styled(TouchableOpacity)<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.primary_100};
  height: 50px;
  width: 80%;
  margin-bottom: 10px;

  justify-content: center;
  align-items: center;
  border-radius: 25px;
  border: 1px solid #f39;
`;
export const ButtonText = styled(Text)`
  font-size: 32px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text_100};
`;
