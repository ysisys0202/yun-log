import { Global, css } from "@emotion/react";
import { colorVars } from "@/constants/cssVariables";
import Typography from "@/components/common/Typography";
import { media } from "@/constants/breakPoints";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import NameSvg from "public/images/home/name.svg";
import { gnbHeightPc } from "@/constants/size";
import useMediaQuery from "@/hooks/useMediaQuery";
import { calculateScrollEffectValue } from "@/utils/calculateScrollEffectValue";

type Props = {
  setHeaderHide: React.Dispatch<React.SetStateAction<boolean>>;
};

const translateYEffect = {
  defaultValue: 0,
  targetValue: 180,
  startPoint: 0,
  endPoint: 0.6,
};
const opacityEffect = {
  defaultValue: 1,
  targetValue: 0,
  startPoint: 0.4,
  endPoint: 0.65,
};

const Profile = ({ setHeaderHide }: Props) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const [opacity, setOpacity] = useState(opacityEffect.defaultValue);
  const [translateY, setTranslateY] = useState(translateYEffect.defaultValue);
  const isMobile = !useMediaQuery(media.md);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!sectionRef.current) return;
    //스크롤이 섹션 상단 위로 올라갔을 때 초기화
    if (latest === 0) {
      setOpacity(opacityEffect.defaultValue);
      setTranslateY(translateYEffect.defaultValue);
      !isMobile && setHeaderHide(true);
    }
    setTranslateY(
      calculateScrollEffectValue({
        currentScrollPoint: latest,
        ...translateYEffect,
      })
    );
    setOpacity(
      calculateScrollEffectValue({
        currentScrollPoint: latest,
        ...opacityEffect,
      })
    );

    if (!isMobile && latest < opacityEffect.startPoint) {
      setHeaderHide(true);
    }
    if (!isMobile && latest > opacityEffect.endPoint) {
      setHeaderHide(false);
    }
  });
  return (
    <section css={S.self} ref={sectionRef}>
      <Global
        styles={css`
          :root {
            --icon-book: url(/images/home/book_dark.png);
            .dark {
              --icon-book: url(/images/home/book_light.png);
            }
          }
        `}
      />
      <motion.div
        css={S.titleArea}
        style={{
          opacity,
          translateY,
        }}
      >
        <strong css={S.titleText}>Welcome!</strong>
        <h1 css={[S.titleText, S.title]}>
          <span>It&apos;s</span> <span className="visually-hidden">YUN</span>
          <NameSvg viewBox="0 0 59 22" fill={colorVars.primary} />
          <span> &apos;s Dev Log</span>
        </h1>
      </motion.div>
      <motion.div
        style={{
          opacity,
          translateY,
        }}
      >
        <Typography variant="subtitle1" element="p" css={S.description}>
          FE 개발자 YUN의 기록을 담고 있습니다.
          <br />
          Javascript / React / Next.js 등 FE 개발 스택 이야기
          <br />
          FE 개발자로서 고민하고 깨달은 것 등
          <Typography variant="body1" element="span" color={colorVars.tertiary}>
            (이를테면 삽질한 기억이라거나 ⛏️😇)
          </Typography>
          <br />
          여러가지 이야기를 공유합니다.
          <br />
          자주 놀러와주세요 👋
        </Typography>
      </motion.div>
    </section>
  );
};
const S = {
  self: css`
    padding: 48px 48px 100px 48px;
    @media ${media.md} {
      padding: ${gnbHeightPc - 80}px 80px 100px 80px;
      margin-bottom: 40px;
    }
  `,
  titleArea: css``,
  titleText: css`
    line-height: 1.2;
    font-size: 32px;
    font-weight: 800;
    @media ${media.sm} {
      font-size: 42px;
    }
    @media ${media.md} {
      font-size: 52px;
    }
  `,
  title: css`
    display: flex;
    align-items: flex-end;
    gap: 8px;
    span {
      flex-shrink: 0;
    }
    svg {
      margin: 4px -6px 4px 6px;
      width: 74px;
      height: auto;
    }
    &::after {
      content: "";
      margin-bottom: 2px;
      width: 32px;
      height: 32px;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: var(--icon-book);
    }
    @media ${media.sm} {
      svg {
        margin: 10px -6px 10px 6px;
        width: 82px;
      }
      &::after {
        content: "";
        margin-bottom: 4px;
        width: 52px;
        height: 52px;
      }
    }
    @media ${media.md} {
      svg {
        width: 100px;
      }
      &::after {
        width: 52px;
        height: 52px;
      }
    }
  `,

  description: css`
    margin-top: 24px;
    font-weight: 400 !important;
  `,
};

export default Profile;
