import { modeColor } from "@/constants/colors";
import { colorModeState, value as colorModeValue } from "@/store/colorMode";
import { useRecoilState } from "recoil";

export default function useColorMode() {
  const [colorMode, setColorMode] = useRecoilState(colorModeState);

  return modeColor[colorMode];
}
