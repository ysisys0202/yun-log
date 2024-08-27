import { atom } from "recoil";
import { ColorThemeType } from "@/types/colorTheme";

export const colorThemeState = atom<ColorThemeType>({
  key: "colorTheme",
  default: "light",
});
