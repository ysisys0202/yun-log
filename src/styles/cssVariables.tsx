import { Global, css } from "@emotion/react";
import { colors } from "@/constants/index";

const globalStyles = css`
  :root {
    --color-primary: ${colors.gray[100]};
    --color-secondary: ${colors.gray[90]};
    --color-tertiary: ${colors.gray[80]};
    --color-background-element: ${colors.gray[20]};
    --color-background-global: ${colors.colors.white};
    --color-border: ${colors.gray[30]};
    --color-green-primary: ${colors.green[100]};
    --color-green-border: ${colors.green[50]};
    --color-green-background: ${colors.green[10]};
  }
  :root.dark {
    --color-primary: ${colors.gray[20]};
    --color-secondary: ${colors.gray[30]};
    --color-tertiary: ${colors.gray[40]};
    --color-background-element: ${colors.gray[20]};
    --color-background-global: ${colors.gray[100]};
    --color-border: ${colors.gray[60]};
    --color-green-primary: ${colors.green[10]};
    --color-green-border: ${colors.green[50]};
    --color-green-background: ${colors.green[100]};
  }
`;

const GlobalStyles = () => <Global styles={globalStyles} />;

export default GlobalStyles;
