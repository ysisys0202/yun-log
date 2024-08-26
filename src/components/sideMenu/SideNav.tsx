import Link from "next/link";
import { css } from "@emotion/react";
import useCategoriesInfo from "@/hooks/useNavCategories";
import Typography from "@/components/common/Typography";
import { useRouter } from "next/router";
import { colorVars } from "@/constants/cssVariables";

const SideNav = () => {
  const router = useRouter();
  const { pathname, query } = router;
  const currentCategory = pathname === "/posts" ? "전체" : query.category;
  const { navCategories } = useCategoriesInfo();
  return (
    <nav css={S.self}>
      <Typography variant="h4" element="h2">
        게시글 목록
      </Typography>
      <ul css={S.navList}>
        {navCategories.map(({ name, fileLength, link }) => {
          const isActive = currentCategory === name;
          return (
            <li
              key={name}
              css={S.navItem}
              className={`${isActive ? "is-active" : ""}`}
            >
              <Link href={link}>
                <Typography variant="subtitle1" element="span">
                  {name} ({fileLength})
                </Typography>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const S = {
  self: css`
    margin-top: 80px;
  `,
  navList: css`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 12px;
  `,

  navItem: css`
    span {
      position: relative;
      padding-right: 24px;
      font-weight: 400 !important;
      &::after {
        content: "";
        position: absolute;
        top: 2px;
        right: 0;
        width: 12px;
        height: 12px;
        background-color: transparent;
      }
    }
    &.is-active,
    &:hover {
      span {
        &::after {
          background-color: ${colorVars.greenPrimary};
        }
      }
    }
  `,
};
export default SideNav;
