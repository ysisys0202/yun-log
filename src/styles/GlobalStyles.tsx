import { colorSet } from "@/styles/variables/colors";
import { colorVars } from "@/constants/cssVariables";
import { Global, css } from "@emotion/react";
import { typography } from "@/constants/typography";

const GlobalStyles = () => {
  return (
    <Global
      styles={[
        colorSet,
        css`
          html,
          body {
            font-size: ${typography.size.md};
            color: ${colorVars.secondary};
            font-family: "Pretendard Variable", Pretendard, -apple-system,
              BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue",
              "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
              "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
              sans-serif;
            font-weight: ${typography.weight[400]};
            line-height: ${typography.lineheight.default};
            letter-spacing: ${typography.letterspacing.default};
          }
        `,
      ]}
    />
  );
};

export default GlobalStyles;
