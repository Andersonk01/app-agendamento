import styled from "styled-components";

import { View, Text } from "react-native";

export const Wrapper = styled(View)`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const TitleText = styled(Text)`
  color: ${({ theme }) => theme.colors.text_100};
  font-size: 42px;
  /* font-style: italic; */
`;
export const DescriptionText = styled(Text)`
  color: ${({ theme }) => theme.colors.text_100};
  font-size: 16px;
  font-style: italic;
  text-align: center;
`;
