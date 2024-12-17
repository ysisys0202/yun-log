import Image from "next/image";
import { colorVars } from "@/constants/cssVariables";
import useColorTheme from "@/hooks/useColorTheme";
import { errorPageStyle } from "@/styles/errorPageStyle";
import Typography from "@/components/common/Typography";
import NavigateButton from "@/components/common/NavigateButton";

const Error404 = () => {
  const { colorTheme } = useColorTheme();
  const isDark = colorTheme === "dark";
  return (
    <section css={errorPageStyle.self}>
      <Image
        src={`/images/error/404_${isDark ? "white" : "black"}.png`}
        alt="404 에러"
        width={222}
        height={90}
        css={errorPageStyle.image}
      />
      <Typography
        variant={"h3"}
        as={"h1"}
        fontWeight={400}
        css={errorPageStyle.title}
      >
        앗, <br />
        페이지가 존재하지 않습니다!
      </Typography>
      <NavigateButton
        href="/"
        size="lg"
        borderColor={colorVars.primary}
        propsCss={errorPageStyle.button}
      >
        홈으로 돌아가기
      </NavigateButton>
    </section>
  );
};

export default Error404;
