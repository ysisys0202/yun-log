import Image from "next/image";
import HomeSection from "./HomeSection";
import { css } from "@emotion/react";
import SectionTitle from "@/components/home/SectionTitle";
import { colors, gray } from "@/constants/colors";
import { media } from "@/constants/breakPoints";
import Typography from "@/components/common/Typography";
const Profile = () => {
  return (
    <HomeSection SectionStyle={S}>
      <SectionTitle>이골더 개발 블로그</SectionTitle>
      <Image
        src="/images/home/profile.jpg"
        alt="프로필 이미지"
        width={430}
        height={460}
      />
      <Typography
        variant="h4"
        element="strong"
        color={colors.white}
        className="!font-normal"
      >
        프론트엔드 개발을 합니다
      </Typography>
    </HomeSection>
  );
};
const S = css`
  border-bottom: 1px solid ${gray.border};
  b img {
    margin-top: 16px;
    max-width: 300px;
  }
  strong {
    display: flex;
    margin-top: 8px;
  }

  @media ${media.md} {
    width: 40vw;
    border-right: 1px solid ${gray.border};
    border-bottom: none;
  }
`;
export default Profile;
