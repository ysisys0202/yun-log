import { css } from "@emotion/react";
import { media } from "@/constants/breakPoints";
import { green } from "@/constants/colors";
import { colorVars } from "@/constants/cssVariables";
import { typography } from "@/constants/typography";

const markdownStyle = css`
  word-break: keep-all;
  p {
    white-space: pre-wrap;
  }
  del {
    font-size: 14px;
    color: ${colorVars.tertiary};
  }
  table {
    background-color: ${colorVars.backgroundGlobal};
    thead {
      border-bottom: 2px solid ${colorVars.border};
    }
    th,
    td {
      padding: 10px 16px;
      border: 1px solid ${colorVars.border};
    }
  }
  a {
    text-decoration: underline;
    &::after {
      content: "↗️";
      font-size: 0.6em;
    }
  }
  ol {
    list-style: decimal;
  }
  ul {
    list-style: disc;
  }
  li {
    margin-left: 16px;
    &:not(:first-of-type) {
      margin-top: 8px;
    }
    ul {
      list-style: square;
    }
  }
  blockquote {
    position: relative;
    padding: 12px 24px;
    background-color: ${colorVars.backgroundElement};
    font-size: ${typography.size["sm"]};
    @media ${media.md} {
      font-size: ${typography.size["md"]};
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background-color: ${colorVars.primary};
    }
  }
`;

export default markdownStyle;
