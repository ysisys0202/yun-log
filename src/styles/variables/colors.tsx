import { css } from "@emotion/react";
import { colors } from "@/constants/index";
import { themeColor } from "@/constants/colors";

export const colorSet = css`
  :root {
    --color-primary: ${themeColor.light.primary};
    --color-secondary: ${themeColor.light.secondary};
    --color-tertiary: ${themeColor.light.tertiary};
    --color-background-element: ${themeColor.light.backgroundElement};
    --color-background-global: ${themeColor.light.backgroundGlobal};
    --color-border: ${themeColor.light.border};
    --color-green-primary: ${themeColor.light.greenPrimary};
    --color-green-border: ${themeColor.light.greenBorder};
    --color-green-background: ${themeColor.light.greenBackground};
  }
  :root .dark {
    --color-primary: ${themeColor.dark.primary};
    --color-secondary: ${themeColor.dark.secondary};
    --color-tertiary: ${themeColor.dark.tertiary};
    --color-background-element: ${themeColor.dark.backgroundElement};
    --color-background-global: ${themeColor.dark.backgroundGlobal};
    --color-border: ${themeColor.dark.border};
    --color-green-primary: ${themeColor.dark.greenPrimary};
    --color-green-border: ${themeColor.dark.greenBorder};
    --color-green-background: ${themeColor.dark.greenBackground};
  }
`;
