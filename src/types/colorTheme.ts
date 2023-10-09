export type ColorThemeType = "light" | "dark";
export type ColorSematicType =
  | "primary"
  | "secondary"
  | "tertiary"
  | "background_element"
  | "background_global"
  | "border"
  | "green_primary"
  | "green_border"
  | "green_background";
export type ColorSetType = {
  [key in ColorSematicType]: string;
};
export type ColorThemeSetType = {
  [key in ColorThemeType]: ColorSetType;
};
