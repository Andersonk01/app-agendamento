import styled from "styled-components";
import { View, Text } from "react-native";

export const Wrapper = styled(View)`
  /* background: #fbbbbb; */
  flex: 3;
  width: 80%;
  height: 60px;
  border: 1px solid #f39;
  background-color: ${({ theme }) => theme.colors.primary_100};
  border-radius: 40px;
  margin-bottom: 18px;
  flex-direction: row;
`;

export const TextBox = styled(View)`
  flex: 3;
  align-items: center;
  justify-content: center;
`;
export const TextB = styled(Text)`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.text_100};
`;
