import Link from "next/link";
import { SerializedStyles, css } from "@emotion/react";
import usePostNavList from "@/hooks/usePostNavList";
import Typography from "@/components/common/Typography";
import { useRouter } from "next/router";
import { colorVars } from "@/constants/cssVariables";
import { event } from "@/libs/gTag";
import Skeleton from "../common/Skeleton";
import withErrorBoundary from "@/components/hoc/withErrorBoundary";
import withSuspense from "@/components/hoc/withSuspense";

type Props = {
  propCss?: SerializedStyles;
};

const SideNav = ({ propCss }: Props) => {
  const router = useRouter();
  const { pathname, query } = router;
  const currentCategory = pathname === "/posts" ? "전체" : query.category;
  const { postNavList } = usePostNavList();

  const handleSideNavItemClick = (value: string) => {
    event({
      action: "click",
      category: "side-nav",
      label: "side-nav_item",
      value,
    });
  };
  return (
    <nav css={propCss}>
      <Typography variant="h4" as="h2">
        게시글 목록
      </Typography>
      <ul css={sideNavStyle.navList}>
        {postNavList &&
          postNavList.map(({ name, fileLength, link }) => {
            const isActive = currentCategory === name;
            return (
              <li
                key={name}
                css={sideNavStyle.navItem}
                className={`${isActive ? "is-active" : ""}`}
              >
                <Link
                  href={link}
                  onClick={() => {
                    handleSideNavItemClick(name);
                  }}
                >
                  <Typography variant="subtitle1" as="span">
                    {name}
                  </Typography>
                  <Typography variant="body2" as="span">
                    ({fileLength})
                  </Typography>
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

const LoadingComponent = ({ size }: { size: number }) => {
  return Array.from({ length: size }, (_, index) => (
    <Skeleton key={index} height="23px" />
  ));
};

const sideNavStyle = {
  navList: css`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 12px;
  `,
  navItem: css`
    a {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        width: calc(100% - 42px);
        height: 2px;
        background-color: transparent;
      }
    }
    span {
      font-weight: 400 !important;
      &:last-of-type {
        position: relative;
        padding-right: 24px;
        font-weight: 400 !important;
        &::after {
          content: "";
          position: absolute;
          right: 0;
        }
      }
    }
    &.is-active,
    &:hover {
      span {
        font-weight: 600 !important;
        &:last-of-type {
          &::after {
            content: "👀";
            transform: translateY(4px);
          }
        }
      }
    }
    &.is-active {
      a {
        &::after {
          background-color: ${colorVars.secondary};
        }
      }
    }
  `,
};

export default withErrorBoundary(
  withSuspense(SideNav, <LoadingComponent size={9} />)
);
