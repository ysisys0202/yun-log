import { ColorThemeSetType } from "@/types/colorTheme";

export const colors = {
  black: "#000",
  white: "#fff",
  blue: "#008e9b",
  yellow: "#fcd12a",
};

export const green = {
  10: "#f4fbf3",
  50: "#cde2ca",
  100: "#5b8982",
};

export const gray = {
  10: "#fafafa",
  20: "#f5f5f5",
  30: "#eee",
  40: "#e0e0e0",
  50: "#bdbdbd",
  60: "#9e9e9e",
  70: "#757575",
  80: "#616161",
  90: "#424242",
  100: "#212121",
};

export const themeColor: ColorThemeSetType = {
  light: {
    primary: gray[100],
    secondary: gray[90],
    tertiary: gray[80],
    backgroundElement: gray[20],
    backgroundGlobal: colors.white,
    border: gray[30],
    greenPrimary: green[100],
    greenBorder: green[50],
    greenBackground: green[10],
  },
  dark: {
    primary: gray[20],
    secondary: gray[30],
    tertiary: gray[40],
    backgroundElement: gray[90],
    backgroundGlobal: gray[100],
    border: gray[60],
    greenPrimary: green[10],
    greenBorder: green[50],
    greenBackground: green[100],
  },
};
