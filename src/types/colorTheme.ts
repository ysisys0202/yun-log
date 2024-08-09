export type ColorThemeType = "light" | "dark";
export type ColorSematicType =
  | "primary"
  | "secondary"
  | "tertiary"
  | "backgroundElement"
  | "backgroundGlobal"
  | "border"
  | "greenPrimary"
  | "greenBorder"
  | "greenBackground";

export type ColorSetType = {
  [key in ColorSematicType]: string;
};
export type ColorThemeSetType = Record<ColorThemeType, ColorSetType>;
