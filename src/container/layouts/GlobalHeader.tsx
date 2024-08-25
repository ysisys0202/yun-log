import Link from "next/link";
import { css } from "@emotion/react";
import { green } from "@/constants/colors";
import { colorVars } from "@/constants/cssVariables";
import { media } from "@/constants/breakPoints";
import { gnbHeightMb, gnbHeightPc, gnbSideSpacing } from "@/constants/size";
import Typography from "@/components/common/Typography";

const GlobalHeader = () => {
  return (
    <header css={S} style={{ borderBottom: `1px solid ${colorVars.border}` }}>
      <nav>
        <h2 className="visually-hidden">블로그 대메뉴</h2>
        <ul>
          {globalMenus.map((globalMenu) => (
            <li key={globalMenu.id}>
              <Link href={globalMenu.link}>
                <Typography
                  variant="subtitle1"
                  element="span"
                  color={colorVars.primary}
                >
                  {globalMenu.name}
                </Typography>
              </Link>
            </li>
          ))}
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

const S = css`
  position: sticky;
  top: 0;
  right: 0;
  z-index: 50;
  padding: 0 ${gnbSideSpacing}px;
  width: 100%;
  height: ${gnbHeightMb}px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  @media ${media.md} {
    height: ${gnbHeightPc}px;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    display: flex;
    align-items: center;
  }
  li {
    a {
      display: inline-block;
      position: relative;
      padding: 12px;
      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        right: 0;
        width: 0px;
        height: 2px;
        background-color: ${green[100]};
        transition: width 200ms ease-in-out;
      }
      &:hover {
        &::after {
          left: 0;
          right: auto;
          width: 100%;
        }
      }
    }
  }
`;
export default GlobalHeader;
