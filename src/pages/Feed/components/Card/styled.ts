import styled from "styled-components";
import { View, Image } from "react-native";

export const CardContainer = styled(View)`
  height: 340px;
  width: 200px;
  background-color: #ccc;
  color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 5px;
  overflow: hidden;
`;
export const CardImage = styled(Image)`
  /* flex: 1; */
  height: 340px;
  width: 200px;
`;
