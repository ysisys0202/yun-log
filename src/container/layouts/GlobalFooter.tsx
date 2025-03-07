import { css } from "@emotion/react";
import { colorVars } from "@/constants/cssVariables";
import { contentSideSpacingMb } from "@/constants/size";
import Typography from "@/components/common/Typography";

const GlobalFooter = () => {
  return (
    <footer css={S.self}>
      <ul>
        <li css={S.footerItem}>
          <Typography variant="body2" as="p" color={colorVars.tertiary}>
            연락처 :
            <a href="mailto:ysisys0202@gmail.com">{""} ysisys0202@gmail.com</a>
          </Typography>
        </li>
        <li css={S.footerItem}>
          <Typography variant="body2" as="p" color={colorVars.tertiary}>
            아이콘 출처 :
            <a
              href="https://www.flaticon.com/free-icons/manual-book"
              title="manual book icons"
            >
              {""} Manual book icons created by Kreev Studio - Flaticon
            </a>
          </Typography>
        </li>
      </ul>
    </footer>
  );
};

const S = {
  self: css`
    position: relative;
    z-index: 1;
    margin-top: -1px;
    padding: 40px ${contentSideSpacingMb}px;
    border-top: 1px solid ${colorVars.tertiary};
    background-color: ${colorVars.backgroundGlobal};
  `,
  footerItem: css`
    a {
      text-decoration: underline;
    }
  `,
};

export default GlobalFooter;
