import { View, Image } from "react-native";
import styled from "styled-components";

export const BannerContainer = styled(View)`
  height: 250px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #666;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 2px solid #666;
`;

export const BannerImage = styled(Image)`
  height: 100%;
  width: 100%;
`;
