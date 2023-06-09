import { View, Text } from "react-native";
import styled from "styled-components";

export const Wrapper = styled(View)`
  /* background-color: transparent; */

  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.text_100};
  font-size: 42px;
`;
export const Description = styled(Text)`
  color: ${({ theme }) => theme.colors.text_100};
  font-size: 16px;
  font-style: italic;
  text-align: center;
`;
