import styled, { css } from "styled-components";
import { View } from "react-native";

export const ContainerTop = styled(View)`
  flex: 3;
  width: 100%;
  background: ${({ theme }) => theme.colors.bg_100};
  align-items: center;
  justify-content: center;
`;

export const ContainerBottom = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg_200};
  width: 100%;
  align-items: center;
  justify-content: center;
`;
