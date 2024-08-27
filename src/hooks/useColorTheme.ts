import { colorThemeState } from "@/store/colorTheme";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const setColorThemeClass = (isDark: boolean) => {
  if (isDark) {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
  }
};

const useColorTheme = () => {
  const [colorTheme, setColorTheme] = useRecoilState(colorThemeState);
  const isDark = colorTheme == "dark";

  useEffect(() => {
    setColorTheme(
      window.localStorage.getItem("colorTheme") as "light" | "dark"
    );
  }, []);

  const handleColorThemeToggle = () => {
    setColorTheme(isDark ? "light" : "dark");
    setColorThemeClass(isDark);
    window.localStorage.setItem("colorTheme", isDark ? "light" : "dark");
  };
  return { colorTheme, handleColorThemeToggle };
};

export default useColorTheme;
