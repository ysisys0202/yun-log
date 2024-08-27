import { useRouter } from "next/router";
import Link from "next/link";
import { css } from "@emotion/react";
import { colorVars } from "@/constants/cssVariables";
import { media } from "@/constants/breakPoints";
import { gnbHeightMb, gnbHeightPc, gnbSideSpacing } from "@/constants/size";
import Typography from "@/components/common/Typography";

type Props = {
  isHide?: boolean;
};

const GlobalHeader = ({ isHide }: Props) => {
  const router = useRouter();
  const { pathname, query } = router;
  const { slug } = query;

  return (
    <header css={S.self} className={`${isHide ? "is-hide" : ""}`}>
      <nav css={S.nav}>
        <h2 className="visually-hidden">블로그 대메뉴</h2>
        <ul css={S.navList}>
          {globalMenus.map((menu) => {
            const isActive =
              menu.name === "홈"
                ? pathname === "/"
                : pathname.includes("/posts") && !slug;
            return (
              <li
                key={menu.id}
                css={S.navItem}
                className={`${isActive ? "is-active" : ""}`}
              >
                <Link href={menu.link}>
                  <Typography
                    variant="subtitle1"
                    element="span"
                    color={colorVars.primary}
                  >
                    {menu.name}
                  </Typography>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

const globalMenus = [
  {
    id: "home",
    name: "홈",
    link: "/",
  },
  {
    id: "posts",
    name: "게시물 목록",
    link: "/posts",
  },
];

const S = {
  self: css`
    position: sticky;
    top: 0;
    right: 0;
    z-index: 50;
    padding: 0 ${gnbSideSpacing}px;
    width: 100%;
    height: ${gnbHeightMb}px;
    background-color: rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid ${colorVars.border};
    backdrop-filter: blur(10px);
    transition: transform 200ms ease-in-out;
    &.is-hide {
      transform: translateY(-100%);
    }
    @media ${media.md} {
      height: ${gnbHeightPc}px;
    }
  `,
  nav: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  navList: css`
    display: flex;
    align-items: center;
  `,
  navItem: css`
    a {
      display: inline-block;
      position: relative;
      padding: 12px;
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: transparent;
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
export default GlobalHeader;
