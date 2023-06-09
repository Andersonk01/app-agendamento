import styled from "styled-components";
import { View } from "react-native";

export const SettingContainer = styled(View)`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bg_100};
  justify-content: center;
  align-items: center;
`;
