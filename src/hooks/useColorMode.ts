import { modeColor } from "@/constants/colors";
import { colorModeState, value as colorModeValue } from "@/store/colorMode";
import { ColorThemeType } from "@/types/colorTheme";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function useColorMode() {
  const [colorMode, setColorMode] = useRecoilState(colorModeState);

  return modeColor[colorMode];
}
