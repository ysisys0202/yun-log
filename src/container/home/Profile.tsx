import Image from "next/image";
import HomeSection from "./HomeSection";
import { css } from "@emotion/react";
import SectionTitle from "@/components/home/SectionTitle";
import { colors, gray } from "@/constants/colors";
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
      <div className="skill-set">
        <span className="label">주요 기술</span>
        <span className="skill-list">{skillList.join(", ")}</span>
      </div>
    </HomeSection>
  );
};
const S = css`
  width: 40vw;
  color: ${colors.white};
  border-right: 1px solid ${gray.border};
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
  .skill-set {
    display: flex;
    margin-top: 4px;
    font-size: 16px;
    .label {
      &::after {
        content: ":";
        margin: 0 4px;
      }
    }
  }
`;
const skillList = ["HTML", "CSS", "Java Script", "React", "Next"];
export default Profile;
