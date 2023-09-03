/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";

const GlobalHeader = () => {
  return (
    <header css={S}>
      <nav>
        <h2 className="visually-hidden">블로그 대메뉴</h2>
        <ul>
          {globalMenus.map((globalMenu) => (
            <li key={globalMenu.id}>
              <Link href={globalMenu.link}>{globalMenu.name}</Link>
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
  ul {
    display: flex;
    align-items: center;
  }
  li {
    a {
      display: inline-block;
      position: relative;
      padding: 12px;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.4;
      color: #000;
      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        right: 0;
        width: 0px;
        height: 2px;
        background-color: #000;
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
