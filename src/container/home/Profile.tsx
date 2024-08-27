import { Global, css } from "@emotion/react";
import { colorVars } from "@/constants/cssVariables";
import Typography from "@/components/common/Typography";
import { media } from "@/constants/breakPoints";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import NameSvg from "public/images/home/name.svg";
import { gnbHeightMb, gnbHeightPc } from "@/constants/size";
import useScrollEffectValue from "@/hooks/useScrollEffectValue";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  setHeaderHide: React.Dispatch<React.SetStateAction<boolean>>;
};

const translateYEffect = {
  defaultValue: 0,
  targetValue: -220,
  startPoint: 0.2,
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
  const { scrollY } = useScroll();
  const [sectionTop, setSectionTop] = useState<number>(0);
  const [sectionBottom, setSectionBottom] = useState<number>(0);
  const [opacity, setOpacity] = useState(1);
  const [translateY, setTranslateY] = useState(0);
  const { calculateScrollEffectValue } = useScrollEffectValue();
  const isMobile = !useMediaQuery(media.md);
  useEffect(() => {
    if (!sectionRef.current) return;
    const sectionRect = sectionRef.current.getBoundingClientRect();
    setSectionTop(sectionRect.top + window.scrollY);
    setSectionBottom(sectionRect.top + window.scrollY + sectionRect.height);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!sectionRef.current) return;
    //페이지 최상단 일 때 값 초기화
    if (latest === 0) {
      setOpacity(1);
      setTranslateY(0);
      !isMobile && setHeaderHide(true);
    }

    if (latest > sectionTop && latest < sectionBottom) {
      const inSectionScrollRatio =
        (latest - sectionTop) / (sectionBottom - sectionTop);
      calculateScrollEffectValue({
        currentScrollPoint: inSectionScrollRatio,
        setValue: setTranslateY,
        ...translateYEffect,
      });
      calculateScrollEffectValue({
        currentScrollPoint: inSectionScrollRatio,
        setValue: setOpacity,
        ...opacityEffect,
      });

      if (!isMobile && inSectionScrollRatio < opacityEffect.startPoint) {
        setHeaderHide(true);
      }
      if (!isMobile && inSectionScrollRatio > opacityEffect.endPoint) {
        setHeaderHide(false);
      }
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
          <span>It's</span> <span className="visually-hidden">YUN</span>
          <NameSvg viewBox="0 0 59 22" fill={colorVars.primary} />
          <span> 's Dev Log</span>
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
        <Typography variant="body1" element="p" css={S.feedback}>
          게시글에 대한 오류 지적, 내용 보충, 질문 등의 피드백은 언제나
          환영입니다.
          <br />
          <a href="mailto:ysisys0202@gmail.com">ysisys0202@gmail.com</a>으로
          전달주세요.
        </Typography>
      </motion.div>
    </section>
  );
};
const S = {
  self: css`
    position: sticky;
    top: ${gnbHeightMb}px;
    padding: 48px 48px 140px 48px;
    @media ${media.md} {
      top: 0;
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
  feedback: css`
    margin-top: 12px;
    a {
      text-decoration: underline;
    }
  `,
};

export default Profile;
