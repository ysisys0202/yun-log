import { isClient } from "@/services/common";
import { ColorThemeType } from "@/types/colorTheme";
import { RecoilState, atom } from "recoil";
const key = "colorMode";
// const localStorageEffect =
//   (key: string) =>
//   ({ setSelf, onSet }: any) => {
//     if (!isClient) {
//       return;
//     }

//     const savedValue = localStorage.getItem(key);

//     if (savedValue != null) {
//       setSelf(JSON.parse(savedValue));
//     }

//     onSet((newValue: string, _: string, isReset: boolean) => {
//       isReset
//         ? localStorage.removeItem(key)
//         : localStorage.setItem(key, JSON.stringify(newValue));
//     });
//   };
// const getLocalStorageValue = (key: string): string | undefined => {
//   if (!isClient) {
//     return undefined;
//   }
//   const value = localStorage.getItem(key);
//   return value ?? undefined;
// };
export const colorModeState: RecoilState<ColorThemeType> = atom({
  key,
  default: "dark" as ColorThemeType,
  // effects: [localStorageEffect(key)],
});
