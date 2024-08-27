import Head from "next/head";

type Props = {
  title?: string;
  keyword?: string;
  description?: string;
  ogImage?: string;
};
const MyHead = ({
  title,
  keyword = "웹 개발, 프론트엔드, html, css, 자바스크립트, 리액트, 넥스트",
  description = "프론트엔드 개발자 Yun의 개발 기록",
  ogImage = "",
}: Props) => {
  const siteName = "Yun's Dev Log";
  return (
    <Head>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="Keywords" content={keyword} />
      <meta name="Description" content={description} />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    </Head>
  );
};

export default MyHead;
