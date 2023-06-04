import styled from "styled-components";
import { View, Text } from "react-native";

// interface Propsb {
//   background: ViewStyle["backgroundColor"];
// }

export const Wrapper = styled(View)`
  /* background: #fbbbbb; */
  flex: 3;
  width: 80%;
  height: 80px;
  border: 1px solid #f39;
  background-color: #faa2a1;
  border-radius: 8px;
  margin-bottom: 18px;
  flex-direction: row;
`;

export const TextBox = styled(Text)`
  font-family: monospace;
  font-size: 40px;
  font-weight: bold;
  flex: 3;
  align-self: center;
  text-align: justify;
  color: #fff;
`;
