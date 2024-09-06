import { css } from "@emotion/react";
import { themeColor } from "@/constants/colors";

export const colorSet = css`
  :root {
    --color-primary: ${themeColor.light.primary};
    --color-secondary: ${themeColor.light.secondary};
    --color-tertiary: ${themeColor.light.tertiary};
    --color-background-element: ${themeColor.light.backgroundElement};
    --color-background-global: ${themeColor.light.backgroundGlobal};
    --color-border: ${themeColor.light.border};
  }
  :root [data-color-theme="dark"] {
    --color-primary: ${themeColor.dark.primary};
    --color-secondary: ${themeColor.dark.secondary};
    --color-tertiary: ${themeColor.dark.tertiary};
    --color-background-element: ${themeColor.dark.backgroundElement};
    --color-background-global: ${themeColor.dark.backgroundGlobal};
    --color-border: ${themeColor.dark.border};
  }
`;
