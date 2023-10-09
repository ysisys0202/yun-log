import { colorModeState } from "@/store/colorMode";
import React, { ButtonHTMLAttributes } from "react";
import { useRecoilState } from "recoil";
import IconSun from "public/icons/sun.svg";
import IconMoon from "public/icons/moon.svg";
import useColorMode from "@/hooks/useColorMode";
type Props = ButtonHTMLAttributes<HTMLButtonElement>;
const ColorModeButton = (props: Props) => {
  const [colorMode, setColorMode] = useRecoilState(colorModeState);
  const isDark = colorMode === "dark";
  const c = useColorMode();
  const Icon = isDark ? (
    <IconMoon width={24} height={24} fill={c.primary} />
  ) : (
    <IconSun width={24} height={24} fill={c.primary} />
  );
  const buttonClickHandler = () => {
    setColorMode(isDark ? "light" : "dark");
  };
  return (
    <button
      {...props}
      onClick={buttonClickHandler}
      aria-label={`${isDark ? "라이트" : "다크"}모드로 변경하기`}
    >
      {Icon}
    </button>
  );
};

export default ColorModeButton;
