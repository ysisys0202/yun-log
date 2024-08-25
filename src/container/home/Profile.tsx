import Image from "next/image";
import HomeSection from "./HomeSection";
import { css } from "@emotion/react";
import SectionTitle from "@/components/home/SectionTitle";
import Typography from "@/components/common/Typography";
import { colorVars } from "@/constants/cssVariables";
import { green } from "@/constants/colors";

const Profile = () => {
  return (
    <HomeSection>
      <Typography variant="h1" element="h1">
        WELCOME!
        <br /> <span css={S.name}>YUN</span> 의 기술 블로그입니다
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
