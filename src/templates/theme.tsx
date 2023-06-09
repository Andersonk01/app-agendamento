import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "../components/theme";

function Theme(children: React.ReactNode) {
  return <ThemeProvider theme={theme.dark}> {children} </ThemeProvider>;
}
