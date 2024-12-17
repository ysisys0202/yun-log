import Typography from "@/components/common/Typography";
import NavigateButton from "@/components/common/NavigateButton";
import { colorVars } from "@/constants/cssVariables";
import useColorTheme from "@/hooks/useColorTheme";
import Image from "next/image";
import { errorPageStyle } from "@/styles/errorPageStyle";

const Error = () => {
  const { colorTheme } = useColorTheme();
  const isDark = colorTheme === "dark";
  return (
    <section css={errorPageStyle.self}>
      <Image
        src={`/images/error/error_${isDark ? "white" : "black"}.png`}
        alt="에러"
        width={380}
        height={100}
        css={errorPageStyle.image}
      />
      <Typography
        variant={"h3"}
        as={"h1"}
        fontWeight={400}
        css={errorPageStyle.title}
      >
        앗, <br />
        에러가 발생했습니다!
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

export default Error;
