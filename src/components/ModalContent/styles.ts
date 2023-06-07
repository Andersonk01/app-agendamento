import styled from "styled-components";
import { View } from "react-native";

export const WrapperModal = styled(View)`
  flex: 1;
  width: 100%;
  height: 60%;
  background-color: #fff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding-top: 24px;
  padding-bottom: 70px;
`;
