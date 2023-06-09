import styled from "styled-components";
import { SafeAreaView } from "react-native";

export const FeedContainer = styled(SafeAreaView)`
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg_100};
  padding: 30px 20px;
`;
