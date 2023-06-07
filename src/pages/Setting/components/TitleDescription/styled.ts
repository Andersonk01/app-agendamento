import { View, Text } from "react-native";
import styled from "styled-components";

export const TitleDescriptionContainer = styled(View)`
  /* background-color: transparent; */

  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

export const TitleDescriptionTitle = styled(Text)`
  /* background-color: aqua; */
  font-size: 26px;
  margin-bottom: 4px;
  font-weight: bold;
`;
export const TitleDescriptionDescription = styled(Text)`
  /* background-color: aqua; */
  font-size: 18px;
  font-weight: 100;
  font-style: italic;
`;
