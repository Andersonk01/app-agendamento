import { Text, View } from "react-native";
import styled from "styled-components";

export const WrapperDesigner = styled(Text)`
  width: 100%;
  /* background-color: b; */
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  border-bottom-width: 2px;
  border-bottom-color: #fbbbbb;
  margin-bottom: 10px;
  padding: 8px;
  flex: 1;
`;
export const TextDesigner = styled(Text)`
  font-size: 26px;
  font-family: monospace;
`;
