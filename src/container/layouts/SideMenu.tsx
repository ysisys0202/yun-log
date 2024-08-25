import { css } from "@emotion/react";
import Link from "next/link";
import { media } from "@/constants/breakPoints";
import Logo from "@/components/common/Logo";
import { colorVars } from "@/constants/cssVariables";
import SideNav from "@/components/sideMenu/SideNav";

const SideMenu = () => {
  return (
    <aside
      css={S.self}
      style={{ borderRight: `1px solid ${colorVars.border}` }}
    >
      <Link href="/" className="logo" css={S.logo}>
        <Logo />
        <strong className="visually-hidden">YUN 개발 블로그</strong>
      </Link>
      <SideNav />
    </aside>
  );
};
const S = {
  self: css`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    padding: 16px 32px;
    width: 80%;
    height: 100dvh;
    background-color: ${colorVars.greenBackground};
    transform: translateX(100vw);
    transition: transform 200ms ease-in-out;
    @media ${media.md} {
      width: 20%;
      min-width: 220px;
      transform: translateX(0);
    }
  `,
  logo: css`
    margin-left: -4px;
  `,
};
export default SideMenu;
