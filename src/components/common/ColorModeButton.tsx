import { ButtonHTMLAttributes, useEffect, useState } from "react";
import IconSun from "public/icons/sun.svg";
import IconMoon from "public/icons/moon.svg";
import { colorVars } from "@/constants/cssVariables";
import IconButton from "@/components/common/IconButton";
import useColorTheme from "@/hooks/useColorTheme";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const ColorModeButton = (props: Props) => {
  const { colorTheme, handleColorThemeToggle } = useColorTheme();
  const isDark = colorTheme === "dark";
  const label = `${isDark ? "라이트" : "다크"}모드로 변경하기`;
  const icon = isDark ? (
    <IconSun width={24} height={24} fill={colorVars.primary} />
  ) : (
    <IconMoon width={24} height={24} fill={colorVars.primary} />
  );

  return (
    <IconButton
      element={"button"}
      name={label}
      icon={icon}
      onClick={handleColorThemeToggle}
      aria-label={label}
      {...props}
    />
  );
};

export default ColorModeButton;
