import styled from "styled-components";
import theme from ".";

type Theme = typeof theme.dark;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
