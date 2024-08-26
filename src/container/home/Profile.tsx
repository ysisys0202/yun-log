import { css } from "@emotion/react";
import { colorVars } from "@/constants/cssVariables";
import { green } from "@/constants/colors";
import Typography from "@/components/common/Typography";
import HomeSection from "@/container/home/HomeSection";
import { media } from "@/constants/breakPoints";

const Profile = () => {
  return (
    <HomeSection css={S.self}>
      <Typography variant="h1" element="h1" css={S.title}>
        WELCOME!
        <br /> <span css={S.name}>YUN</span> 의 기술 블로그입니다.
      </Typography>
      <Typography variant="subtitle1" element="p" css={S.description}>
        Javascript / React / Next.js 등 FE 개발 스택 이야기
        <br />
        FE 개발자로서 알게 되고 생각한 것 등
        <Typography variant="body1" element="span" color={colorVars.tertiary}>
          (이를테면 삽질한 기억이라거나 ⛏️😇)
        </Typography>
        <br />
        여러가지 이야기를 공유합니다.
        <br />
        자주 놀러와주세요 👋
      </Typography>
    </HomeSection>
  );
};
const S = {
  self: css`
    padding: 40px;
    @media ${media.md} {
      padding: 80px;
    }
  `,
  title: css`
    line-height: 1.2;
  `,
  name: css`
    position: relative;
    padding-right: 20px;
    &::after {
      content: "";
      position: absolute;
      top: 6px;
      right: 4px;
      width: 12px;
      height: 12px;
      background-color: ${green[100]};
    }
  `,
  description: css`
    margin-top: 24px;
    font-weight: 400;
    line-height: 1.6;
  `,
};

export default Profile;
