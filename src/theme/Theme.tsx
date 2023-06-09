import React from "react";

import { createContext, useState, useEffect } from "react";
import { ThemeProvider as ThemeProviderOrigin } from "styled-components/native";
import themeLightDark from ".";

import AsyncStorage from "@react-native-async-storage/async-storage";

// Tipando o theme
export enum ThemeType {
  light = "light",
  dark = "dark",
}
// quardando os valores do theme light e dark
// para usar os valores no ThemeProviderOrigin
const themes = {
  light: themeLightDark.light,
  dark: themeLightDark.dark,
};
// usando conceitos do Context API
export const ThemeContext = createContext({
  theme: ThemeType.light,
  toggleTheme: () => {},
});

type ThemeProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.light);

  useEffect(() => {
    loadTheme();
  }, []);
  async function loadTheme() {
    const savedTheme = await AsyncStorage.getItem("@THEME_CURRENT");
    if (savedTheme) {
      setTheme(savedTheme as ThemeType);
    }
  }

  function toggleTheme() {
    let selectTheme;

    if (theme === ThemeType.light) {
      // Se o tema atual for light, alterna para dark
      selectTheme = ThemeType.dark;
    } else {
      // Caso contrário, alterna para light
      selectTheme = ThemeType.light;
    }
    setTheme(selectTheme);
    // Salva o tema selecionado no AsyncStorage
    AsyncStorage.setItem("@THEME_CURRENT", selectTheme);
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderOrigin theme={themes[theme]}>
        {children}
      </ThemeProviderOrigin>
    </ThemeContext.Provider>
  );
};
