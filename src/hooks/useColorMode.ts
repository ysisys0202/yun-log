import { modeColor } from "@/constants/colors";
import { colorModeState } from "@/store/colorMode";
import { ColorThemeType } from "@/types/colorTheme";
import { useRecoilValue } from "recoil";

export default function useColorMode() {
  const colorMode: ColorThemeType = useRecoilValue(colorModeState);
  return modeColor[colorMode];
}
