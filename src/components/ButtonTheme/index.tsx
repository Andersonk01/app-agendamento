import { Switch } from "react-native";
import React, { useContext } from "react";
import { ThemeContext, ThemeType } from "../../theme/Theme";

export const ButtonTheme = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const isDark = theme === ThemeType.dark;

  return <Switch value={isDark} onValueChange={toggleTheme} />;
};
