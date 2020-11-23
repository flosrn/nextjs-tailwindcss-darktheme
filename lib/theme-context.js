import React, { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [switchValue, setSwitchValue] = useState(undefined);

  const replaceHtmlClass = (newTheme) => {
    const currentTheme = document.querySelector("html").classList.value;
    document.querySelector("html").classList.replace(currentTheme, newTheme);
  };

  useEffect(() => {
    const persistedThemePreference = window.localStorage.getItem("theme");
    const systemThemePreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (
      persistedThemePreference === "dark" ||
      (!("theme" in localStorage) && systemThemePreference)
    ) {
      replaceHtmlClass("dark");
      return setSwitchValue(true);
    }
    return setSwitchValue(false);
  }, []);

  const toggleDarkMode = (theme) => {
    setSwitchValue(!switchValue);
    replaceHtmlClass(theme);
    window.localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        switchValue,
        switchHandler: () => toggleDarkMode(!switchValue ? "dark" : "light"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
