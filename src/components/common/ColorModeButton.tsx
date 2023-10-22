import React, { ButtonHTMLAttributes, useEffect } from "react";
import { useRecoilState } from "recoil";
import IconSun from "public/icons/sun.svg";
import IconMoon from "public/icons/moon.svg";
import useColorMode from "@/hooks/useColorMode";
import { colorModeState, value as colorModeValue } from "@/store/colorMode";
type Props = ButtonHTMLAttributes<HTMLButtonElement>;
const setDarkClass = (isDark: boolean) => {
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
const ColorModeButton = (props: Props) => {
  const [colorMode, setColorMode] = useRecoilState(colorModeState);
  const isDark = colorMode === "dark";
  const c = useColorMode();
  const Icon = isDark ? (
    <IconMoon width={24} height={24} fill={c.primary} />
  ) : (
    <IconSun width={24} height={24} fill={c.primary} />
  );

  useEffect(() => {
    const isDark =
      colorModeValue === "dark" ||
      (!("colorMode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setColorMode(isDark ? "dark" : "light");
  }, []);
  useEffect(() => {
    setDarkClass(colorMode === "dark");
  }, [colorMode]);
  const buttonClickHandler = () => {
    setColorMode(isDark ? "light" : "dark");
    localStorage.setItem("colorMode", isDark ? "light" : "dark");
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
