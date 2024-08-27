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
  30: "#e5e5e5",
  40: "#d4d4d4",
  50: "#a3a3a3",
  60: "#737373",
  70: "#525252",
  80: "#404040",
  90: "#262626",
  100: "#171717",
  150: "#0a0a0a",
};

export const themeColor: ColorThemeSetType = {
  light: {
    primary: gray[90],
    secondary: gray[80],
    tertiary: gray[70],
    backgroundElement: gray[30],
    backgroundGlobal: colors.white,
    border: gray[30],
  },
  dark: {
    primary: gray[20],
    secondary: gray[30],
    tertiary: gray[40],
    backgroundElement: gray[80],
    backgroundGlobal: gray[90],
    border: gray[60],
  },
};
