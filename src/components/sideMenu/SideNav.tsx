import Link from "next/link";
import { css } from "@emotion/react";
import useCategoriesInfo from "@/hooks/useNavCategories";
import Typography from "@/components/common/Typography";
import { useRouter } from "next/router";
import { colorVars } from "@/constants/cssVariables";
import { event } from "@/libs/gTag";
import Skeleton from "../common/Skeleton";

const SideNav = () => {
  const router = useRouter();
  const { pathname, query } = router;
  const currentCategory = pathname === "/posts" ? "전체" : query.category;
  const { navCategories } = useCategoriesInfo();
  const handleSideNavItem = (value: string) => {
    event({
      action: "click",
      category: "side-nav",
      label: "side-nav_item",
      value,
    });
  };

  return (
    <nav css={S.self}>
      <Typography variant="h4" as="h2">
        게시글 목록
      </Typography>
      <ul css={S.navList}>
        {navCategories.length === 0 && renderSkeletonItems(3)}
        {navCategories.length > 0 &&
          navCategories.map(({ name, fileLength, link }) => {
            const isActive = currentCategory === name;
            return (
              <li
                key={name}
                css={S.navItem}
                className={`${isActive ? "is-active" : ""}`}
              >
                <Link
                  href={link}
                  onClick={() => {
                    handleSideNavItem(name);
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

const renderSkeletonItems = (length: number) => {
  const skeletons = [];
  for (let i = 0; i < length; i++) {
    skeletons.push(<Skeleton key={i} height="23px" />);
  }
  return skeletons;
};

const S = {
  self: css`
    position: absolute;
    top: 50%;
    left: 32px;
    transform: translateY(-70%);
  `,
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
          top: 2px;
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
export default SideNav;
