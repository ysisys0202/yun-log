import { css } from "@emotion/react";
import Typography from "../common/Typography";
import { colorVars } from "@/constants/cssVariables";
import { typography } from "@/constants/typography";

export type CalloutProps = {
  icon: string;
  title: string;
  children: React.ReactNode;
};

const Callout = ({ icon = "💡", title, children }: CalloutProps) => {
  return (
    <article css={S.self}>
      {icon !== "none" && (
        <Typography variant="body1" as="span" css={S.icon}>
          {icon}
        </Typography>
      )}
      {title && (
        <Typography
          variant="body1"
          as="h5"
          color={colorVars.primary}
          css={S.title}
        >
          {title}
        </Typography>
      )}
      <Typography variant="body2" as="p" color={colorVars.tertiary}>
        {children}
      </Typography>
    </article>
  );
};

const S = {
  self: css`
    position: relative;
    padding: 11px 8px 12px 28px;
    background-color: ${colorVars.backgroundElement};
  `,
  icon: css`
    position: absolute;
    top: 12px;
    left: 4px;
  `,
  title: css`
    margin-bottom: 8px;
    font-weight: ${typography.weight[500]} !important;
  `,
};
export default Callout;
