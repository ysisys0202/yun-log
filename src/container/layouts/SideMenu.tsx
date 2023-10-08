import { useEffect, useState } from "react";
import Logo from "/public/logo/logo.svg";
import { LinkTag } from "@/components/common/Tag";
import TagList from "@/components/common/TagList";
import { css } from "@emotion/react";
import { colors, gray, green } from "@/constants/colors";
import { useScroll, useSpring } from "framer-motion";
import CircularProgressBar from "@/components/common/CircularProgressBar";
import Link from "next/link";
import { CategoriesInfo } from "@/types/post";
import { categoriesMap } from "@/constants/category";
import { media } from "@/constants/breakPoints";
import { useRecoilState, useRecoilValue } from "recoil";
import { mobileMenuState } from "@/store/mobileMenu";
import useMediaQuery from "@/hooks/useMediaQuery";
import MenuButton from "@/components/common/MenuButton";
import { categories } from "@/store/categories";
const SideMenu = () => {
  const [mount, setMount] = useState(false);
  const postCategories = useRecoilValue(categories);
  const [mobileMenuActive, setMobileMenuActive] =
    useRecoilState(mobileMenuState);
  const { scrollYProgress } = useScroll();
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
      >
        <header>
          <Link href="/" className="logo">
            <Logo width="140" height="140" fill={green.border} />
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
                borderColor={green.border}
                textColor={green.primary}
                href={`/posts/${category.name}`}
              >
                {categoriesMap.get(category.name)} {`(${category.fileLength})`}
              </LinkTag>
            ))}
        </TagList>
        <footer>
          <CircularProgressBar
            className="mx-auto"
            size={80}
            progressPer={scrollYProgress}
            baseColor={green.border}
            progressColor={green.primary}
          />
        </footer>
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
  background-color: ${green.background};
  border-right: 1px solid ${gray.border};
  transform: translateX(100vw);
  transition: transform 200ms ease-in-out;
  &.is-active {
    transform: translateX(calc(100vw - 100%));
  }
  .logo {
    svg {
      transform: translate(-24px, -24px);
    }
  }
  .tab-list {
    margin-top: auto;
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
