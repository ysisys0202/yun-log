import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import { useRecoilState, useRecoilValue } from "recoil";
import Link from "next/link";
import { CategoriesInfo } from "@/types/post";
import { colors } from "@/constants/colors";
import { media } from "@/constants/breakPoints";
import { categories } from "@/store/categories";
import { mobileMenuState } from "@/store/mobileMenu";
import useMediaQuery from "@/hooks/useMediaQuery";
import Logo from "@/components/common/Logo";
import MenuButton from "@/components/common/MenuButton";
import Tag from "@/components/common/Tag";
import TagList from "@/components/common/TagList";
import { colorVars } from "@/constants/cssVariables";

const SideMenu = () => {
  const router = useRouter();
  const query = router.query;
  const currentCategory = query.category as string;
  const [mount, setMount] = useState(false);
  const postCategories = useRecoilValue(categories);
  const [mobileMenuActive, setMobileMenuActive] =
    useRecoilState(mobileMenuState);
  const isMediaMd = useMediaQuery(media.md);
  const mobileMenuButtonClickHandler = () => {
    setMobileMenuActive((prevState: boolean) => !prevState);
  };
  useEffect(() => {
    setMount(true);
  }, []);

  return (
    mount && (
      <aside
        className={`side-menu ${mobileMenuActive ? "is-active" : ""}`}
        css={S}
        style={{ borderRight: `1px solid ${colorVars.border}` }}
      >
        <header>
          <Link href="/" className="logo">
            <Logo />
            <strong className="visually-hidden">이윤슬 개발 블로그</strong>
          </Link>
          {!isMediaMd && (
            <MenuButton
              isActive={mobileMenuActive}
              onClick={mobileMenuButtonClickHandler}
              className="mobile-menu-button"
            />
          )}
        </header>
        <TagList className="tab-list">
          {postCategories &&
            postCategories.map((category: CategoriesInfo) => (
              <Link href={`/posts/${category.name}`} key={category.name}>
                <Tag
                  variant="outlined"
                  backgroundColor={
                    currentCategory === category.name
                      ? colorVars.greenPrimary
                      : "transparent"
                  }
                  borderColor={colorVars.greenBorder}
                  textColor={
                    currentCategory === category.name
                      ? colorVars.greenBackground
                      : colorVars.greenPrimary
                  }
                >
                  {category.name} {`(${category.fileLength})`}
                </Tag>
              </Link>
            ))}
        </TagList>
      </aside>
    )
  );
};
const S = css`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 16px;
  width: 80%;
  height: 100dvh;
  background-color: ${colorVars.greenBackground};
  transform: translateX(100vw);
  transition: transform 200ms ease-in-out;
  &.is-active {
    transform: translateX(calc(100vw - 100%));
  }
  .tab-list {
    margin-top: auto;
    margin-bottom: 120px;
  }
  .mobile-menu-button {
    position: absolute;
    top: 10px;
    right: 20px;
  }
  footer {
    margin: 160px 0 40px;
    text-align: center;
  }
  .scroll-text {
    font-size: 16px;
    color: ${colors.white};
  }
  @media ${media.md} {
    width: 20%;
    min-width: 220px;
    transform: translateX(0);
  }
`;
export default SideMenu;
