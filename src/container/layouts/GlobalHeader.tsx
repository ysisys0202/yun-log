/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
import { colors, gray } from "@/constants/colors";
import useMediaQuery from "@/hooks/useMediaQuery";
import { media } from "@/constants/breakPoints";
import MenuButton from "@/components/common/MenuButton";
import { useRecoilState } from "recoil";
import { mobileMenuState } from "@/store/mobileMenu";
import Typography from "@/components/common/Typography";
const GlobalHeader = () => {
  const isMediaMd = useMediaQuery(media.md);
  const [mobileMenuActive, setMobileMenuActive] =
    useRecoilState(mobileMenuState);
  const mobileMenuButtonClickHandler = () => {
    setMobileMenuActive((prevState: boolean) => !prevState);
  };
  return (
    <header css={S}>
      <nav>
        <h2 className="visually-hidden">블로그 대메뉴</h2>
        <ul>
          {globalMenus.map((globalMenu) => (
            <li key={globalMenu.id}>
              <Link href={globalMenu.link}>
                <Typography
                  variant="subtitle1"
                  element="span"
                  color={colors.white}
                >
                  {globalMenu.name}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
        {!isMediaMd && (
          <MenuButton
            onClick={mobileMenuButtonClickHandler}
            isActive={mobileMenuActive}
            className="mobile-menu-button"
          />
        )}
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
  padding: 0 20px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${gray.border};
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
        background-color: ${colors.white};
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
  .mobile-menu-button {
    position: relative;
    z-index: 1000;
  }
`;
export default GlobalHeader;
