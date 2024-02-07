import { useEffect, useState } from "react";
import Logo from "@/components/common/Logo";
import { LinkTag } from "@/components/common/Tag";
import TagList from "@/components/common/TagList";
import { css } from "@emotion/react";
import { colors } from "@/constants/colors";
import Link from "next/link";
import { CategoriesInfo } from "@/types/post";
import { categoriesMap } from "@/constants/category";
import { media } from "@/constants/breakPoints";
import { useRecoilState, useRecoilValue } from "recoil";
import { mobileMenuState } from "@/store/mobileMenu";
import useMediaQuery from "@/hooks/useMediaQuery";
import MenuButton from "@/components/common/MenuButton";
import { categories } from "@/store/categories";
import useColorMode from "@/hooks/useColorMode";
import { ColorSetType } from "@/types/colorTheme";
const SideMenu = () => {
  const [mount, setMount] = useState(false);
  const postCategories = useRecoilValue(categories);
  const [mobileMenuActive, setMobileMenuActive] =
    useRecoilState(mobileMenuState);
  const isMediaMd = useMediaQuery(media.md);
  const mobileMenuButtonClickHandler = () => {
    setMobileMenuActive((prevState: boolean) => !prevState);
  };
  const c = useColorMode();
  useEffect(() => {
    setMount(true);
  }, []);
  return (
    mount && (
      <aside
        className={`side-menu ${mobileMenuActive ? "is-active" : ""}`}
        css={S(c)}
        style={{ borderRight: `1px solid ${c.border}` }}
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
              <LinkTag
                key={category.name}
                variant="outlined"
                borderColor={c.green_border}
                textColor={c.green_primary}
                href={`/posts/${category.name}`}
              >
                {categoriesMap.get(category.name)} {`(${category.fileLength})`}
              </LinkTag>
            ))}
        </TagList>
      </aside>
    )
  );
};
const S = (c: ColorSetType) => css`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 16px;
  width: 80%;
  height: 100dvh;
  background-color: ${c.green_background};
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
const tagList = [
  {
    label: "JavaScript",
  },
  {
    label: "HTML",
  },
  { label: "CSS" },
  { label: "Web" },
  { label: "React" },
  { label: "Next" },
];
export default SideMenu;
