import Head from "next/head";

type Props = {
  title?: string;
  keywords?: string;
  description?: string;
  ogImage?: string;
};
const AppHead = ({
  title,
  keywords = "웹 개발, 프론트엔드, html, css, 자바스크립트, 리액트, 넥스트",
  description = "프론트엔드 개발자 Yun의 개발 기록",
  ogImage = "https://drive.google.com/uc?export=view&id=1yOlfpgm4njlZWaw6QkgCrY1ufD_uKOaJ",
}: Props) => {
  const siteName = "Yun's Dev Log";
  return (
    <Head>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
    </Head>
  );
};

export default AppHead;
