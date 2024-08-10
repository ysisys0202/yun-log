import { ButtonHTMLAttributes, useEffect, useState } from "react";
import IconSun from "public/icons/sun.svg";
import IconMoon from "public/icons/moon.svg";
import { colorVars } from "@/constants/cssVariables";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const setThemeClass = (isDark: boolean) => {
  if (isDark) {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
  }
};

const ColorModeButton = (props: Props) => {
  const [colorTheme, setColorTheme] = useState<"light" | "dark">();
  const isDark = colorTheme == "dark";
  const Icon = isDark ? (
    <IconSun width={24} height={24} fill={colorVars.primary} />
  ) : (
    <IconMoon width={24} height={24} fill={colorVars.primary} />
  );

  useEffect(() => {
    setColorTheme(
      window.localStorage.getItem("colorTheme") as "light" | "dark" | undefined
    );
  }, []);

  const handleColorThemeToggle = () => {
    setColorTheme(isDark ? "light" : "dark");
    setThemeClass(isDark);
    window.localStorage.setItem("colorTheme", isDark ? "light" : "dark");
  };

  return (
    <button
      {...props}
      onClick={handleColorThemeToggle}
      aria-label={`${isDark ? "라이트" : "다크"}모드로 변경하기`}
    >
      {Icon}
    </button>
  );
};

export default ColorModeButton;
