import Image from "next/image";
import HomeSection from "./HomeSection";
import { css } from "@emotion/react";
import SectionTitle from "@/components/home/SectionTitle";
import { colors, gray } from "@/constants/colors";
import { media } from "@/constants/breakPoints";
const Profile = () => {
  return (
    <HomeSection SectionStyle={S}>
      <SectionTitle>개발은 절거워</SectionTitle>
      <Image
        src="/images/home/profile.jpg"
        alt="프로필 이미지"
        width={430}
        height={460}
      />
      <strong>프론트엔드 개발을 합니다</strong>
    </HomeSection>
  );
};
const S = css`
  color: ${colors.white};
  img {
    margin-top: 16px;
    max-width: 300px;
  }
  strong {
    display: flex;
    margin-top: 8px;
    font-size: 24px;
    font-weight: 500;
  }

  @media ${media.md} {
    width: 40vw;
    border-right: 1px solid ${gray.border};
  }
`;
export default Profile;
