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
      <header css={S.header}>
        <Typography variant="body1" element="span">
          {icon}
        </Typography>
        <Typography
          variant="body1"
          element="h5"
          color={colorVars.primary}
          css={css`
            font-weight: ${typography.weight[700]} !important;
          `}
        >
          {title}
        </Typography>
      </header>
      <div>
        <Typography variant="body2" element="p" color={colorVars.tertiary}>
          {children}
        </Typography>
      </div>
    </article>
  );
};

const S = {
  self: css`
    padding: 8px 12px;
    background-color: ${colorVars.backgroundElement};
  `,
  header: css`
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 8px;
  `,
};
export default Callout;
