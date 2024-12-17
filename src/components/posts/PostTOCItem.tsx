import { css } from "@emotion/react";
import { colorVars } from "@/constants/cssVariables";
import { gnbHeightPc } from "@/constants/size";
import { scrollTopSpacing } from "@/components/posts/PostTOC";
import { Heading } from "@/hooks/usePostTOC";

type Props = {
  heading: Heading;
  isActive: boolean;
};
const PostTOCItem = ({ heading, isActive }: Props) => {
  const { title, id, level } = heading;
  const sytles = [S.self, S.level[level as 2 | 3 | 4 | 5]];
  const handleItemClick = (id: string) => {
    const targetHeading = document.querySelector(`#post-container #${id}`);
    if (!targetHeading) return;
    const itemPosition =
      targetHeading.getBoundingClientRect().top +
      scrollY -
      gnbHeightPc -
      scrollTopSpacing;

    scrollTo({
      top: itemPosition,
      behavior: "smooth",
    });
  };

  return (
    <li css={sytles} className={isActive ? "is-active" : ""}>
      <button
        type="button"
        css={S.button}
        onClick={() => {
          handleItemClick(id);
        }}
      >
        {title}
      </button>
    </li>
  );
};

const S = {
  self: css`
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${colorVars.tertiary};
    font-weight: 400;

    &::after {
      content: "";
    }
    &:hover,
    &.is-active {
      color: ${colorVars.primary};
      font-weight: 600;
      &::after {
        content: "🎄";
        transform: translateY(2px);
      }
    }
    &.is-active {
      button {
        &::after {
          left: 0;
          right: auto;
          width: 100%;
          transition: width 50ms ease-in-out;
        }
      }
    }
  `,
  button: css`
    position: relative;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background-color: ${colorVars.secondary};
      transition: width 200ms ease-in-out;
    }
  `,
  level: {
    2: css`
      font-size: 16px;
      margin-top: 8px;
    `,
    3: css`
      padding-left: 8px;
      font-size: 15px;
    `,
    4: css`
      padding-left: 16px;
      font-size: 14px;
    `,
    5: css`
      padding-left: 24px;
      font-size: 13px;
    `,
  },
};

export default PostTOCItem;
