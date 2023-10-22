import { isClient } from "@/services/common";
import { ColorThemeType } from "@/types/colorTheme";
import { useEffect } from "react";
import { RecoilState, atom } from "recoil";

export const getLocalStorageValue = (key: string): string | undefined => {
  if (!isClient) {
    return undefined;
  }
  const value = localStorage.getItem(key);
  return value ? value : undefined;
};
export const key = "colorMode";
export const value = (
  getLocalStorageValue(key) ? getLocalStorageValue(key) : "light"
) as ColorThemeType;

// const localStorageEffect =
//   (key: string) =>
//   ({ setSelf, onSet, trigger }: any) => {
//     if (!isClient) {
//       return;
//     }
//     const savedValue = localStorage.getItem(key);
//     if (savedValue != null) {
//       setSelf(savedValue);
//     }
//     onSet((newValue: string, _: string, isReset: boolean) => {
//       isReset
//         ? localStorage.removeItem(key)
//         : localStorage.setItem(key, newValue);
//     });
//   };

export const colorModeState: RecoilState<ColorThemeType> = atom({
  key,
  default: "light" as ColorThemeType,
  // effects: [localStorageEffect(key)],
});
