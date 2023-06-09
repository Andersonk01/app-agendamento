import styled from "styled-components";
import { TouchableOpacity } from "react-native";

type ButtonProps = {
  onPress: () => void;
};

export const ButtonPlus = styled(TouchableOpacity)<ButtonProps>`
  position: absolute;
  right: -30px;
  bottom: 30px;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.accent_100};
  justify-content: center;
  align-items: center;
`;
